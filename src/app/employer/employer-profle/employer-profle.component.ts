import { AuthService } from 'src/app/shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-profle',
  templateUrl: './employer-profle.component.html',
  styleUrls: ['./employer-profle.component.scss'],
})
export class EmployerProfleComponent implements OnInit {

  user: any = undefined;
  detailForm: FormGroup;
  organizationLogo: any;
  userPhoto: any;
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
    private authService: AuthService,
    private jobPostService: JobPostServiceService,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.isServiceRunning = true;
    // this.user.personalDetails = {};
    this.initializeForm();
    this.authService.getCurrentUser();
    this.authService.currentUser.subscribe((data: any) => {
      this.user = data;
      this.isServiceRunning = false;
      this.initializeDetails();
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

  initializeDetails() {
    this.detailForm.patchValue({
      name: this.user.personalDetails.name,
      email: this.user.personalDetails.email,
      mobile: this.user.personalDetails.mobile,
      alternateNumber: this.user.personalDetails.alternateNumber,
      organizationName: this.user.organizationDetails.organizationName,
      organizationEmail: this.user.organizationDetails.organizationEmail,
      organizationMobile: this.user.organizationDetails.organizationMobile,
      field: this.user.organizationDetails.organizationField,
      addressLineOne: this.user.organizationDetails.addressLineOne,
      addressLineTwo: this.user.organizationDetails.addressLineTwo,
      pincode: this.user.organizationDetails.pincode,
      city: this.user.organizationDetails.city,
    });
    this.userPhoto = this.user.personalDetails.photo;
    this.organizationLogo = this.user.organizationDetails.logo;
  }

  initializeForm() {

    this.detailForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl(null, [Validators.required]),
      organizationName: new FormControl(null, [Validators.required]),
      organizationEmail: new FormControl(null,
        [Validators.required, Validators.email]),
      organizationMobile: new FormControl(null,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      field: new FormControl(null, [Validators.required]),
      addressLineOne: new FormControl(null, [Validators.required]),
      addressLineTwo: new FormControl(null,
        [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

}
