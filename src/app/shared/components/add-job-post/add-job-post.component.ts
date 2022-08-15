import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from './../../services/toast.service';
import { JobPostServiceService } from './../../services/job-post-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.scss'],
})
export class AddJobPostComponent implements OnInit {

  jobPost: any = undefined;
  lastDateToAppply: Date;

  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: '/recruiter/dashboard'
    },
    {
      name: 'MY PROFILE',
      route: '/recruiter/profile'
    },
    {
      name: 'JOB POSTS',
      route: '/recruiter/job-posts'
    },
    {
      name: 'MANAGE APPLICANTS',
      route: '/recruiter/applicants'
    },
    {
      name: 'ADD JOB POST',
      route: '/recruiter/create-job-posts'
    }
  ];

  jobPostForm: FormGroup;
  aboutUs = '';

  description: any = '';

  companyName = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.organizationName;
  companyLogo = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.logo;

  isServiceRunning = false;
  message = '';

  jobDetailsArray: any[] = [];
  questionsArray: any[] = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  skillsOptions: string[] = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
    'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];

  skillName: FormControl = new FormControl(null, Validators.required);
  skillsArray: any[] = [];
  filteredSkills: Observable<string[]>;

  formatLabel(value: number) {
    if (value === 10) { return '10+'; }
    return `${value}-${value + 1}`;
  }

  constructor(
    private jobPostService: JobPostServiceService,
    private toastService: ToastService,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private router: Router,
  ) { }

  addQuestion() {
    this.questionsArray.push({ question: '' });
  }

  deleteQuestion(index: number) {
    this.questionsArray.splice(index, 1);
  }

  ngOnInit() {
    this.filteredSkills = this.skillName.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value))
    );
    this.jobDetailsArray.push({ detail: '' });
    this.jobPostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      vacancy: new FormControl('', [Validators.required, Validators.minLength(1)]),
      salary: new FormControl('', [Validators.required, Validators.minLength(1)]),
      location: new FormControl(''),
      lastDateToApply: new FormControl(null, [Validators.required]),
      jobType: new FormControl('', [Validators.required]),
      jobInternship: new FormControl('', [Validators.required]),
      salaryType: new FormControl('', [Validators.required]),
      partTime: new FormControl(false),
      experience: new FormControl(6),
    });

    if (this.jobPostService.post) {
      this.jobPost = this.jobPostService.post;
      this.jobPostForm.patchValue({
        title: this.jobPost.jobPost.title,
        vacancy: this.jobPost.jobPost.vacancy,
        salary: this.jobPost.jobPost.salary,
        location: this.jobPost.jobPost.location,
        jobType: this.jobPost.jobPost.jobType,
        jobInternship: this.jobPost.jobPost.jobInternship,
        salaryType: this.jobPost.jobPost.salaryType,
        partTime: this.jobPost.jobPost.partTime,
        lastDateToApply: new Date(this.jobPost.jobPost.lastDateToApply),
        experience: this.jobPost.jobPost.experience,
      });
      this.skillsArray = this.jobPost.jobPost.skills;
      this.description = this.jobPost.jobPost.details,
        this.jobDetailsArray = this.jobPost.jobPost.details;
      this.aboutUs = this.jobPost.jobPost.aboutUs;
      this.questionsArray = this.jobPost.jobPost.question;
    }
    this.jobPostService.post = undefined;
  }

  closeModal() {
    this.isServiceRunning = false;
    this.modalService.hide(2);
  }

  openSkillModal(template: any) {
    this.skillName.patchValue('');
    this.modalRef = this.modalService.show(template, { id: 2, ignoreBackdropClick: true, animated: true });
    this.isServiceRunning = true;
  }

  private _filterSkills(value: string): string[] {
    if (value !== null) {
      const filterValue = value.toLowerCase();

      return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  addFieldValueToSkillArray() {
    this.skillName.markAsTouched();
    if (this.skillName.value) {
      if (!this.skillsArray.find(data => data.skillName === this.skillName.value)) {
        this.skillsArray.push({ skillName: this.skillName.value });
      }
      this.closeModal();
      this.skillName.reset();
    }
  }

  deleteFieldValueToSkillArray(index) {
    if (this.skillsArray.length > 1) { this.skillsArray.splice(index, 1); }
  }

  addFieldValueToJobDetailsArray() {
    this.jobDetailsArray.push({ detail: '' });
  }

  deleteFieldValueJobDetailsArray(index) {
    if (this.jobDetailsArray.length > 1) {
      this.jobDetailsArray.splice(index, 1);
    }
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  save() {
    this.message = '';
    this.jobPostForm.markAllAsTouched();
    if (this.questionsArray.length > 0) {
      this.questionsArray.forEach((question, index) => {
        if (question.question === '') {
          this.toastService.showToast('Please enter question');
          return;
        }
        if (index === this.questionsArray.length - 1) {
          this.addPost();
        }
      });
    }
    else { this.addPost(); }
  }
  addPost() {
    if (this.skillsArray.length > 0) {
      if (this.description) {
        if (this.jobPostForm.valid) {
          if (this.jobPostForm.get('jobType').value === 'In office') {
            if (this.jobPostForm.get('location').value) {
              this.uploadPost();
            }
            else { this.toastService.showToast('Enter Location', 'bg-danger'); }
          }
          else {
            this.uploadPost();
          }
        }
        else { this.toastService.showToast('Please fill all mandatory fields!', 'bg-danger'); }
      }
      else { this.toastService.showToast('Enter Job Details!', 'bg-danger'); }
    }
    else { this.toastService.showToast('Please add skill(s)!', 'bg-danger'); }
  }

  uploadPost() {
    this.isServiceRunning = true;
    const post: any = {
      jobPost: {
        active: true,
        companyName: this.companyName,
        companyLogo: this.companyLogo,
        createdBy: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
        createdAt: new Date(),
        title: this.jobPostForm.get('title').value,
        vacancy: this.jobPostForm.get('vacancy').value,
        salary: this.jobPostForm.get('salary').value,
        location: this.jobPostForm.get('location').value,
        jobType: this.jobPostForm.get('jobType').value,
        jobInternship: this.jobPostForm.get('jobInternship').value,
        salaryType: this.jobPostForm.get('salaryType').value,
        partTime: this.jobPostForm.get('partTime').value,
        lastDateToApply: this.jobPostForm.get('lastDateToApply').value,
        experience: this.jobPostForm.get('experience').value,
        skills: this.skillsArray,
        question: this.questionsArray,
        details: this.description,
        aboutUs: this.aboutUs,
        verified: this.jobPost ? this.jobPost.status === 'approved' : false
      }
    };
    if (!this.jobPost) {
      this.jobPostService.addJobPost(post).subscribe((data: any) => {
        if (data.data === true) { this.toastService.showToast('Job Post Added Successfully !'); }
        this.isServiceRunning = false;
        this.jobPostForm.reset();
        this.skillsArray = [];
        this.questionsArray = [];
        this.description = '';
        this.aboutUs = '';
        this.modalRef.hide();
        this.jobPostService.getPosts();
      });
    }
    else {
      post._id = this.jobPost._id;
      this.jobPostService.updateJobPost(post).subscribe((data: any) => {
        if (data.data === true) { this.toastService.showToast('Job Post Updated Successfully !'); }
        this.jobPostService.post = undefined;
        this.isServiceRunning = false;
        this.modalService.hide();
        window.history.back();
        this.jobPostService.getPosts();
      });
    }
  }

  deletePost() {
    this.isServiceRunning = true;
    this.jobPostService.deleteJobPost({ _id: this.jobPost._id }).subscribe((data: any) => {
      if (data.data === true) { this.toastService.showToast('Job post deleted successully!'); }
      this.jobPostService.post = undefined;
      this.isServiceRunning = false;
      this.modalService.hide();
      window.history.back();
    },
      err => this.isServiceRunning = false
    );
  }

  delete(template: any) {
    this.modalRef = this.modalService.show(template, { id: 2, class: 'delete-modal', ignoreBackdropClick: true, animated: true });
  }

  close(id = 1) {
    if (id === 2) { this.modalService.hide(2); }
    else { this.modalService.hide(); }
  }

}
