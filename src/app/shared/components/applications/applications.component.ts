import { UserRole } from './../../models/enums';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllJobPostsComponent } from '../all-job-posts/all-job-posts.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {

  allCandidates: any[] = [];
  filteredCandidates: any[] = [];
  isAllChecked = false;

  totalChecked = 0;

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

  isServiceRunning = false;
  skillName = new FormControl(null, Validators.required);
  postId = '';
  post: any = {};
  minExp: number;
  candidatesArray: any[] = [];

  public modalRef: BsModalRef;

  allAplications: any[] = [];
  aplications: any[] = [];

  filterTemplate: any = {};

  skillsOptions: string[] = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
    'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
  filteredSkills: Observable<string[]>;
  skillsArray: any[] = [];

  // logic for top nav bar
  isApplicationRecieved = true;
  isShortlisted = false;
  isHired = false;
  isRejected = false;
  totalHired = 0;
  totalShortlisted = 0;
  totalRejected = 0;
  applicationRecieved = 0;
  confirmModalStatus = 'Shortlisted';
  curentUserId: any;

  allReferedProfiles: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: AuthService,
    public modalController: ModalController,
    private modalService: BsModalService,
    private toast: ToastService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.jobId) {
        this.postId = params.jobId;
        this.getDetails();
        this.allCandidates = [];
        this.getApplicants();
        this.getReferedProfiles();
      }
    });


    this.filteredSkills = this.skillName.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value))
    );
  }




  private _filterSkills(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  closeModal() {
    this.modalRef.hide();
  }

  getApplicants() {
    this.allCandidates = [];
    this.filteredCandidates = [];
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'applyJob',
      query: { jobPostId: this.postId }
    };
    this.dbService.find(db).subscribe((candidates: any) => {
      this.isServiceRunning = false;
      if (candidates.data.length > 0) {
        candidates.data.forEach((cand: any, index) => {
          this.isServiceRunning = true;
          const dbOperation: DbOperation = {
            collection: 'users',
            query: { _id: cand.candidateId },
            selectedFields: { name: 1, resume: 1, _id: 1, profileCompleted: 1, email: 1 },
          };
          this.dbService.find(dbOperation).subscribe((a: any) => {
            if (a.data.length > 0) {
              a = a.data[0];
              const user = {
                applyId: cand._id,
                _id: a._id,
                name: a.name,
                resume: a.resume,
                email: a.email,
                status: cand.status ? cand.status : null,
                statusArray: cand.statusArray ? cand.statusArray : [],
                isChecked: false,
                profileCompleted: a.profileCompleted ? a.profileCompleted : 20
              };
              if (!this.allCandidates.find(data => data._id === user._id)) {
                this.allCandidates.push(user);
              }
              this.changeTopMenu(0);
              this.calculateApplocants();
              this.isServiceRunning = false;
            }
          });
        });
      }
    });
  }

  getDetails() {
    this.isServiceRunning = true;
    const operation: DbOperation = {
      collection: 'jobposts',
      query: { _id: this.postId }
    };
    this.dbService.find(operation).subscribe((data: any) => {
      this.isServiceRunning = false;
      if (data.data.length > 0) {
        this.isServiceRunning = true;
        this.post = data.data[0];
      }
    });
  }

  getReferedProfiles() {
    this.isServiceRunning = true;
    const operation: DbOperation = {
      collection: 'referedProfiles',
      query: { jobId: this.postId }
    };
    this.dbService.find(operation).subscribe((candidates: any) => {
      this.isServiceRunning = false;
      if (candidates.data.length > 0) {
        candidates.data.forEach((cand: any, index) => {
          this.isServiceRunning = true;
          const dbOperation: DbOperation = {
            collection: 'users',
            query: { email: cand.email, role: 2 },
            selectedFields: { name: 1, resume: 1, _id: 1, profileCompleted: 1, email: 1 },
          };
          this.dbService.find(dbOperation).subscribe((a: any) => {
            if (a.data.length > 0) {
              a = a.data[0];
              const user = {
                applyId: cand._id,
                refered: true,
                _id: a._id,
                name: cand.name,
                resume: cand.resume,
                email: a.email,
                status: cand.status ? cand.status : null,
                statusArray: cand.statusArray ? cand.statusArray : [],
                isChecked: false,
                profileCompleted: a.profileCompleted ? a.profileCompleted : 20
              };
              if (!this.allCandidates.find(data => data.applyId === user.applyId)) {
                this.allCandidates.push(user);
              }
              this.changeTopMenu(0);
              this.calculateApplocants();
            }
            else {
              const user = {
                applyId: cand._id,
                _id: cand._id,
                name: cand.name,
                refered: true,
                resume: cand.resume,
                email: cand.email,
                status: cand.status ? cand.status : null,
                statusArray: cand.statusArray ? cand.statusArray : [],
                isChecked: false,
                profileCompleted: cand.profileCompleted ? a.profileCompleted : 20
              };
              if (!this.allCandidates.find(data => data.applyId === user.applyId)) {
                this.allCandidates.push(user);
              }
              this.changeTopMenu(0);
              this.calculateApplocants();
            }
            this.isServiceRunning = false;
          });

        });
      }
    });
  }

  openResume(resume: any) {
    window.open(resume);
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: AllJobPostsComponent,
    });
    return await modal.present();
  }

  calculateTotalExp(post: any) {
    const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
    const dateSecond = new Date(post.startDate);
    // time difference
    const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());

    // days difference
    const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));

    return diffYears.toFixed(0) + ' Years';
  }

  seeResume(resume: string, id: any, profileViews: any) {
    const db: DbOperation = {
      collection: 'users',
      data: { profileViews: profileViews ? profileViews + 1 : 1 },
      query: { _id: id }
    };
    this.dbService.update(db).then((data: any) => {
      if (data.data) {
        window.open(resume);
      }
    });
  }

  openFilter(template: any) {
    this.filterTemplate = template;
    this.modalRef = this.modalService.show(template, { class: 'filter-modal', ignoreBackdropClick: true, animated: true });
  }

  seeResults() {
    this.isServiceRunning = true;
    this.candidatesArray.forEach((cand: any, index) => {
      const dbOperation: DbOperation = {
        collection: 'users',
        query: { _id: cand.candidateId, totalWorkExp: { $gt: this.minExp ? this.minExp - 1 : 0 } }
      };
      this.allAplications = [];
      this.aplications = [];
      this.dbService.find(dbOperation).subscribe((user: any) => {
        this.isServiceRunning = false;
        if (user.data.length > 0) {
          const candidate: any = user.data[0];
          if (this.skillsArray.length > 0) {
            this.skillsArray.forEach(skill => {
              if (candidate.skills.find((data: string) => data.includes(skill))) {
                const localCandidate: any = user.data[0];
                localCandidate.appliedOn = cand.date;
                localCandidate.appliedId = cand._id;
                localCandidate.status = cand.status ? cand.status : null;
                this.aplications.push(localCandidate);
                this.allAplications.push(localCandidate);
              }
            });
          }
          else {
            candidate.appliedOn = candidate.date;
            this.allAplications.push(candidate);
            this.aplications.push(candidate);
          }
        }
      });
      if (index + 1 === this.candidatesArray.length) { this.closeModal(); }
    });
  }

  openSkillModal(template: any) {
    this.modalRef.hide();
    this.skillName.reset();
    this.modalRef = this.modalService.show(template, { id: 1, ignoreBackdropClick: true, animated: true });
  }

  addSkill() {
    this.skillName.markAsTouched();
    if (this.skillName.value) {
      this.skillsArray.push(this.skillName.value);
      this.modalRef.hide();
      this.openFilter(this.filterTemplate);
    }
  }

  removeTag(index: any) {
    this.skillsArray.splice(index, 1);
  }

  removeFromFilter(index: any) {
    this.skillsArray.splice(index, 1);
    this.seeResults();
  }

  removeExp() {
    this.minExp = null;
    this.seeResults();
  }

  clearFilter() {
    this.skillsArray = [];
    this.minExp = null;
    this.getDetails();
  }

  removeChecked() {
    this.allCandidates.map((data: any) => {
      data.isChecked = false;
    });
  }

  changeTopMenu(id: number) {
    this.isApplicationRecieved = false;
    this.isShortlisted = false;
    this.isHired = false;
    this.isRejected = false;

    switch (id) {
      case 0: {
        this.isApplicationRecieved = true;
        this.filterApplicants(null);
        this.totalChecked = 0;
        this.removeChecked();
        break;
      }
      case 1: {
        this.isShortlisted = true;
        this.filterApplicants('Shortlisted');
        this.totalChecked = 0;
        this.removeChecked();
        break;
      }
      case 2: {
        this.isHired = true;
        this.filterApplicants('Hired');
        this.totalChecked = 0;
        this.removeChecked();
        break;
      }
      case 3: {
        this.isRejected = true;
        this.filterApplicants('Rejected');
        this.totalChecked = 0;
        this.removeChecked();
        break;
      }
    }
  }

  updateStatus(status: string) {
    this.isServiceRunning = true;
    this.modalRef.hide();
    this.filteredCandidates.forEach((user: any, index) => {
      if (user.isChecked === true) {
        user.statusArray.push({ name: status, date: new Date() });
        const db: DbOperation = {
          collection: user.refered === true ? 'referedProfiles' : 'applyJob',
          data: { status, statusArray: user.statusArray },
          query: { _id: user.applyId },
        };
        this.dbService.update(db).then((data: any) => {
          if (data.data === true) {
            user.isChecked = false;
            this.isServiceRunning = false;
          }
          else { this.toast.showToast('Something went wrong!', 'bg-danger'); }
        });
      }
      if (index === this.filteredCandidates.length - 1) {
        this.isServiceRunning = false;
        this.toast.showToast(`${status} Successfully!`);
        this.getApplicants();
        this.getReferedProfiles();
      }
    });
  }

  openConfirmModal(template: any, status: any) {
    this.confirmModalStatus = status;
    this.modalRef = this.modalService.show(template, { animated: true });
  }

  checkAll() {
    this.isAllChecked = !this.isAllChecked;
    if (this.isAllChecked) {
      this.totalChecked = this.filteredCandidates.length;
    }
    else { this.totalChecked = 0; }
    this.filteredCandidates.map((cand: any) => {
      cand.isChecked = this.isAllChecked;
    });
  }

  checkedUser(index: number) {
    this.filteredCandidates[index].isChecked = !this.filteredCandidates[index].isChecked;
    if (this.filteredCandidates[index].isChecked) {
      this.totalChecked++;
      if (this.totalChecked === this.filteredCandidates.length) {
        this.isAllChecked = true;
      }
    }
    else {
      this.totalChecked--;
      this.isAllChecked = false;
    }
  }

  filterApplicants(status) {
    this.filteredCandidates = [];
    this.filteredCandidates = this.allCandidates.filter(data => data.status === status);
    this.filteredCandidates.sort((a, b) => b.profileCompleted - a.profileCompleted);
  }

  viewProfile(id: any) {
    if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.ADMIN) {
      this.router.navigateByUrl(`/admin/applicants/profile/${id}`);
    }
    else { this.router.navigateByUrl(`/recruiter/applicants/profile/${id}`); }
  }

  calculateApplocants() {
    this.applicationRecieved = this.allCandidates.filter((data) => data.status === null).length;
    this.totalShortlisted = this.allCandidates.filter((data) => data.status === 'Shortlisted').length;
    this.totalHired = this.allCandidates.filter((data) => data.status === 'Hired').length;
    this.totalRejected = this.allCandidates.filter((data) => data.status === 'Rejected').length;
  }

}
