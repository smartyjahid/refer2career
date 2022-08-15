import { ToastService } from './../../shared/services/toast.service';
import { DbOperation } from './../../shared/models/dbOperation';
import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss'],
})
export class JobPostsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private jobPostService: JobPostServiceService,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService,
  ) { }

  allJobPost: any[] = [];
  isServiceRunning = false;

  currentPostId: any;
  rejectReason = 'safsaf';

  referReward: number = null;

  ngOnInit() {
    this.jobPostService.getPosts();
    this.getPosts();
  }

  getPosts() {
    this.isServiceRunning = true;
    this.jobPostService.jobPosts.subscribe((data: any) => {
      this.allJobPost = data;
      this.allJobPost.sort((a: any, b: any) => {
        const c: any = new Date(a.jobPost.createdAt);
        const d: any = new Date(b.jobPost.createdAt);
        return d - c;
      });
      this.isServiceRunning = false;
    },
      err => this.isServiceRunning = false);
  }

  addJobPost() {
    this.jobPostService.post = undefined;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }


  seeDetails(id: any) {
    this.router.navigateByUrl(`/admin/jobs/detail/${id}`);
  }

  openRejectModal(id: any, template: any) {
    this.currentPostId = id;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  rejectPost() {
    if (this.rejectReason) {
      this.isServiceRunning = true;
      const db: DbOperation = {
        collection: 'jobposts',
        query: { _id: this.currentPostId },
        data: { status: 'rejected', rejectReason: this.rejectReason }
      };
      this.authService.update(db).then((data: any) => {
        if (data.data) {
          this.modalRef.hide();
          this.isServiceRunning = false;
          this.toast.showToast('Rejected Successfully!');
          this.currentPostId = null;
          this.jobPostService.getPosts();
        }
      });
    }
  }

  openApproveModal(id: any, template: any) {
    this.currentPostId = id;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }
  approvePost() {
    if (this.referReward !== null) {
      this.isServiceRunning = true;
      const db: DbOperation = {
        collection: 'jobposts',
        query: { _id: this.currentPostId },
        data: { status: 'approved', referReward: this.referReward, 'jobPost.verified': true }
      };
      this.authService.update(db).then((data: any) => {
        if (data.data) {
          this.modalRef.hide();
          this.isServiceRunning = false;
          this.toast.showToast('Approved Successfully!');
          this.jobPostService.getPosts();
        }
      });
    }
  }

  closeModal() {
    this.modalRef.hide();
  }

}
