import { DbOperation } from 'src/app/shared/models/dbOperation';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ReferJobPostService } from './../../shared/services/refer-job-post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from './../../shared/services/toast.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Status } from 'src/app/shared/models/enums';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit, AfterViewInit {

  constructor(
    private jobPostService: JobPostServiceService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private toastService: ToastService,
    private referService: ReferJobPostService,
    private dbService: AuthService,
    private router: Router,
  ) { }

  isServiceRunning = false;
  maxDob = new Date(2006, 11, 31);

  user = JSON.parse(window.atob(window.localStorage.getItem('id')));
  jobPost: any = {};
  post: any = {};
  skills: any[] = [];
  fileData: any = undefined;
  filename: any = undefined;

  appliedDate: any = undefined;

  referJobPostForm: FormGroup;

  modalRef: BsModalRef;

  status = Status;

  jobId: any;

  public baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : 'https://instajobapp.herokuapp.com';

  basePath = '/refered-resumes';
  uploadTask: firebase.storage.UploadTask;


  profileForm: FormGroup;

  range = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  title = new FormControl('', Validators.required);
  companyName = new FormControl('', Validators.required);

  workExpForm: FormGroup;

  referTemplate: any;

  questionsAnswers: any[] = [];

  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: '/referer/dashboard'
    },
    {
      name: 'MY PROFILE',
      route: '/referer/profile'
    },
    {
      name: 'JOB POSTS',
      route: '/referer/jobs'
    },
    {
      name: 'APPLIED JOB',
      route: '/referer/my-applications'
    },
    {
      name: 'REFERRED PROFILE',
      route: '/referer/referred'
    }
  ];

  ngOnInit() {
    this.referJobPostForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      fatherName: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      resume: new FormControl(null, Validators.required),
    });
    this.isServiceRunning = true;
    this.jobPostService.getMyApplications();
    this.jobPost.jobPost = {};
    this.jobPost.jobPost.details = [];
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.jobId = params.id;
        this.jobPostService.myApplications.subscribe((data: any) => {
          data.forEach(post => {
            if (post.jobPostId === params.id) {
              this.appliedDate = post.date;
            }
          });
        });
        this.jobPostService.getJobPost({ id: params.id }).subscribe((data: any) => {
          this.jobPost = data.data;
          this.isServiceRunning = false;
          this.skills = this.jobPost.jobPost.skills;
        },
          err => console.log(err));
      }
    });
  }

  ngAfterViewInit() {
  }

  applyJobModal(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  checkProfileDetails(template: any, template1: any) {
    this.modalRef.hide();
    if (this.user) {
      if (this.user.skills) {
        if (this.user.skills.length > 0) {
          if (this.user.resume) {
            this.checkQuestion(template1);
          }
          else {
            this.openProfileError(template);
          }
        }
        else {
          this.openProfileError(template);
        }
      }
      else {
        this.openProfileError(template);
      }
    }
    else {
      this.openProfileError(template);
    }
  }

  openProfileError(template: any) {
    this.modalRef = this.modalService.show(template, { id: 0, class: 'min-overlay', ignoreBackdropClick: true, animated: true });
  }

  checkQuestion(template: any) {
    if (this.jobPost.jobPost.question) {
      if (this.jobPost.jobPost.question.length > 0) {
        this.jobPost.jobPost.question.map((data: any) => {
          this.questionsAnswers.push({ question: data.question, answer: '' });
        });
        this.modalRef = this.modalService.show(template, { id: 0, class: 'min-overlay', ignoreBackdropClick: true, animated: true });
      }
      else {
        this.applyJob();
      }
    }
    else {
      this.applyJob();
    }
  }

  submit() {
    let flag = true;
    this.questionsAnswers.map((data: any, index: number) => {
      if (!data.answer) {
        flag = false;
      }
      if (this.questionsAnswers.length === index + 1) {
        if (flag) {
          this.applyJob();
        }
        else {
          this.toastService.showToast('Enter Answers', 'bg-danger');
        }
      }
    });
  }

  navigate() {
    this.modalRef.hide();
    this.modalService.hide();
    this.router.navigateByUrl('/referer/profile');
  }

  referJobModal(template: any) {
    this.referTemplate = template;
    this.modalService.show(template, { id: 0, class: 'min-overlay', ignoreBackdropClick: true, animated: true });
  }

  applyJob() {
    const obj = {
      candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
      jobPostId: this.jobPost._id,
      date: new Date()
    };
    this.jobPostService.applyJobPost(obj).subscribe((data: any) => {
      if (data.data) {
        const mail = {
          email: this.user.email,
          subject: 'Applied Successfully!',
          content: `<p>Hello ${this.user.name} </p><p>You have successfully applied for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
        };
        this.dbService.sendMail(mail).subscribe((pata: any) => {
          if (pata.data) {
            this.toastService.showToast('Applied successfully!');
            this.jobPostService.getMyApplications();
            this.modalRef.hide();
          }
        });
      }
    });
  }

  async referJobPost() {
    let resume;
    // const file: any;
    this.referJobPostForm.markAllAsTouched();
    if (this.referJobPostForm.valid) {
      const db: DbOperation = {
        collection: 'referedProfiles',
        query: { email: this.referJobPostForm.get('email').value, jobId: this.jobPost.jobPostId, }
      };
      this.dbService.find(db).subscribe(async (data: any) => {
        if (data.data.length === 0) {
          const storageRef: any = firebase.storage().ref();
          const time = new Date().getTime();
          await storageRef.child(`${this.basePath}/${this.referJobPostForm.get('name').value}${time}${this.filename}`).put(this.fileData);
          storageRef.child(`${this.basePath}/${this.referJobPostForm.get('name').value}${time}${this.filename}`)
          .getDownloadURL().then(async (url) => {
            resume = url;
            this.fileData = undefined;
            if (resume && this.fileData === undefined) {
              const refer: any = {
                resume,
                jobTitle: this.jobPost.jobPost.title,
                companyName: this.jobPost.jobPost.companyName,
                name: this.referJobPostForm.get('name').value,
                email: this.referJobPostForm.get('email').value,
                fatherName: this.referJobPostForm.get('fatherName').value,
                dob: this.referJobPostForm.get('dob').value,
                jobId: this.jobId,
                referedBy: (JSON.parse(window.atob(window.localStorage.getItem('id')))).email,
                createdAt: new Date(),
                status: 0,
                statusUpdatedAt: new Date(),
              };

              this.referService.referJobPost(refer).subscribe((ele: any) => {
                this.toastService.showToast('Refered successfully');
                const mail = {
                  email: this.user.email,
                  subject: 'Refered Successfully!',
                  content: `<p>Hello ${this.user.name} </p><p>You have successfully refered ${refer.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                };
                this.dbService.sendMail(mail).subscribe((pata: any) => {
                  if (pata.data) {
                    const email = {
                      email: refer.email,
                      subject: `You have been refered by ${this.user.name}!`,
                      content: `<p>Hello ${refer.name} </p><p>You have been refered by ${this.user.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><p><a style="color: blue;" href="https://refer2career.com">Login to Refer2Career</a> and increase chance to get hired by completing your profile.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                    };
                    this.dbService.sendMail(email).subscribe((jata: any) => {
                      if (jata.data) {
                      }
                    });
                  }
                });
                this.modalService.hide();
              });
            }
          });

        }
        else { this.toastService.showToast('This profile is already refered for this job post!', 'bg-danger'); }

      });
    }
  }

  uploadResume(event: any) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.fileData = event.target.files[0];
    this.filename = event.target.files[0].name;
  }

  getExperience(value: number) {
    return `${value} - ${value + 1}`;
  }

  getStartDate(date: any) {
    const date1: any = new Date();
    const date2: any = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 7;
  }


  closeModal(id = 0) {
    if (id === 0) {
      this.modalService.hide();
    }
    else {
      this.modalService.hide(id);
      this.referJobModal(this.referTemplate);
    }
  }

}
