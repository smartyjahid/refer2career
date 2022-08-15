import { ActivatedRoute, Params } from '@angular/router';
import { DbOperation } from './../../models/dbOperation';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { startWith, map } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {


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
    private storage: AngularFireStorageModule,
    private menu: MenuController,
    private route: ActivatedRoute,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private authService: AuthService,
    private toastService: ToastService) {
  }


  get profileCompleted() {
    let percent = 12;
    if (this.cvHeadLine) { percent += 10; }
    if (this.workExpArray.length > 0) { percent += 15; }
    if (this.skillsArray.length > 0) { percent += 12; }
    if (this.educationArray.length > 0) { percent += 11; }
    if (this.user.resume) { percent += 15; }
    if (this.user.basicInfo) { percent += 15; }
    if (this.user.photo) { percent += 10; }
    document.getElementById('progress-bar').style.width = percent + '%';
    return percent;
  }

  basePath = '/profile-resumes';
  uploadTask: firebase.storage.UploadTask;

  blob: any;
  filename: any;

  user: any = {};
  isEditing = false;

  isBasiDetailEditing = false;
  skillName = new FormControl(null, Validators.required);
  skillsArray: string[] = [];

  isServiceRunning = false;

  profileForm: FormGroup;

  range = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  workExpToUpdate: any = undefined;
  workExpArray: any[] = [];

  title = new FormControl('', Validators.required);
  companyName = new FormControl('', Validators.required);

  educationToUpdate: any = undefined;

  educationDetailsForm: FormGroup;
  workExpForm: FormGroup;
  educationArray: any[] = [];

  cvHeadLine = '';
  isCVHeadEditing = false;

  maxDob = new Date(2006, 11, 31);

  userId: any = '';


  openResume() {
    window.open(this.user.resume, '_blank');
  }

  ngOnInit() {
    this.initializeProfileForm();
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.userId = params.id;
        // this.getDetails();
        this.getUser();
      }
    });
  }


  setBasicInfo() {
    if (this.user.basicInfo) {
      this.profileForm.patchValue({
        mobile: this.user.basicInfo.mobile,
        gender: this.user.basicInfo.gender,
        martialStatus: this.user.basicInfo.martialStatus,
        dob: this.user.basicInfo.dob,
        nationality: this.user.basicInfo.nationality,
      });
    }
    else { this.profileForm.reset(); }
  }



  initializeProfileForm() {
    this.profileForm = new FormGroup({
      martialStatus: new FormControl('', Validators.required),
      nationality: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
    });
  }

  calculateExp() {
    let total = 0;
    for (const post of this.workExpArray) {
      const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
      const dateSecond = new Date(post.startDate);
      // time difference
      const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());

      // days difference
      const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));
      total += diffYears;

    }
    return total.toFixed(0);

  }


  getUser() {
    this.isServiceRunning = true;
    this.authService.find({
      collection: 'users',
      query: {
        _id: this.userId,
        role: 2,
      }
    }).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.user = data.data[0];
        this.setBasicInfo();
        if (this.user.cvHead) {
          this.cvHeadLine = this.user.cvHead;
        }
        this.educationArray = this.user.education ? this.user.education : [];
        this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
        this.skillsArray = this.user.skills ? this.user.skills : [];
        this.isServiceRunning = false;
      }
      else {
        this.authService.find({
          collection: 'referedProfiles',
          query: {
            _id: this.userId,
          }
        }).subscribe((pata: any) => {
          if (pata.data.length > 0) {
            this.user = pata.data[0];
            this.setBasicInfo();
            if (this.user.cvHead) {
              this.cvHeadLine = this.user.cvHead;
            }
            this.educationArray = this.user.education ? this.user.education : [];
            this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
            this.skillsArray = this.user.skills ? this.user.skills : [];
            this.isServiceRunning = false;
          }
        });
      }
    });
  }


}
