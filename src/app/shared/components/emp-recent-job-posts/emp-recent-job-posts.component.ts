import { Router } from '@angular/router';
import { JobPostServiceService } from './../../services/job-post-service.service';
import { AddJobPostComponent } from './../../components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-emp-recent-job-posts',
  templateUrl: './emp-recent-job-posts.component.html',
  styleUrls: ['./emp-recent-job-posts.component.scss'],
})
export class EmpRecentJobPostsComponent implements OnInit {

  allJobPost: any[] = [];

  isServiceRunning = false;

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

  navigateToAllJobs() {
    this.router.navigateByUrl(`/recruiter/job-posts`);
  }

  navigateToMyProfile() {
    this.router.navigateByUrl(`/recruiter/profile`);
  }


}
