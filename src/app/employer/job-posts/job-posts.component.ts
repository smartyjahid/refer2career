import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss'],
})
export class JobPostsComponent implements OnInit {

  allJobPost: any[] = [];

  isServiceRunning = false;

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

  constructor(
    private router: Router,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private jobPostService: JobPostServiceService
  ) { }

  ngOnInit() {
    if (this.router.url.includes('create')) { this.addJobPost(); }
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

  editJobPost(post: any) {
    this.jobPostService.post = undefined;
    this.jobPostService.post = post;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }

  seeDetails(data: any) {
    this.jobPostService.postDetail = data;
    this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
  }

}

