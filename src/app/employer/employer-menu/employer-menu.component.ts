import { Router } from '@angular/router';
import { UserRole } from 'src/app/shared/models/enums';
import { DbOperation } from './../../shared/models/dbOperation';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employer-menu',
  templateUrl: './employer-menu.component.html',
  styleUrls: ['./employer-menu.component.scss'],
})
export class EmployerMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private jobPostService: JobPostServiceService,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private toast: ToastService,
    private dbService: AuthService,
  ) { }

  user: any = {};
  allJobPost: any[] = [];
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

  type = null;
  description = '';

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    this.jobPostService.getPosts();
    this.jobPostService.jobPosts.subscribe((data: any) => {
      this.allJobPost = data;
    });
  }

  addJobPost() {
    this.jobPostService.post = undefined;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }

  navigateToAddJobs() {
    this.jobPostService.post = undefined;
    this.router.navigateByUrl(`/recruiter/create-job-posts`);
  }

  getName(name: string){
    return name.split(' ')[0];
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  cancel() {
    this.modalRef.hide();
  }

  loggedOut() {
    this.modalRef.hide();
    window.localStorage.removeItem('id');
    window.open("https://refer2career.com/login", "_self");
  }

  send() {
    if (this.type) {
      const arr: any[] = this.description.split(' ');
      if (arr.length > 9) {
        const db: DbOperation = {
          collection: 'feedback',
          data: {
            email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email,
            name: JSON.parse(window.atob(window.localStorage.getItem('id'))).name,
            type: this.type,
            description: this.description,
            createdAt: new Date(),
            from: UserRole.EMPLOYER
          }
        };
        this.dbService.create(db).then((data: any) => {
          if (data.data) {
            this.toast.showToast('Sent Successfully!');
            this.cancel();
          }
          else { this.toast.showToast('Something went wrong!', 'bg-danger'); }
        });
      }
      else {
        this.toast.showToast('Please enter description of minimum 10 words!', 'bg-danger');
      }
    }
    else {
      this.toast.showToast('Please Select Type!', 'bg-danger');
    }
  }
}

