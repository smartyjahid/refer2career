import { AddJobPostComponent } from './../add-job-post.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobPostServiceService } from 'src/app/shared/services/job-post-service.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-job-details-shared',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {

  isServiceRunning = false;

  constructor(
    private jobPostService: JobPostServiceService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private toastService: ToastService,
  ) {
  }

  jobPost: any = {};
  post: any = {};
  skills: any[] = [];
  role = undefined;

  appliedDate: any = undefined;

  modalRef: BsModalRef;

  ngOnInit() {
    this.isServiceRunning = true;
    this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
    this.jobPostService.getMyApplications();
    this.jobPost.jobPost = {};
    this.jobPost.jobPost.details = [];
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
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
        });
      }
    });
  }

  applyJobModal(template: any) {
    this.modalRef = this.modalService.show(template,
      { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  applyJob() {
    const obj = {
      candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
      jobPostId: this.jobPost._id,
      date: new Date()
    };
    this.jobPostService.applyJobPost(obj).subscribe((data: any) => {
      if (data.data) {
        this.toastService.showToast('Applied successfully!');
        this.jobPostService.getMyApplications();
        this.modalRef.hide();
      }
    });
  }

  closeModal() {
    this.modalRef.hide();
    this.jobPostService.post = undefined;
  }

  editJobPost() {
    this.jobPostService.post = undefined;
    this.jobPostService.post = this.jobPost;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
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
}
