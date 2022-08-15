import { ToastService } from 'src/app/shared/services/toast.service';
import { DbOperation } from 'src/app/shared/models/dbOperation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ReferJobPostService } from './../../shared/services/refer-job-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refered-profiles',
  templateUrl: './refered-profiles.component.html',
  styleUrls: ['./refered-profiles.component.scss'],
})
export class ReferedProfilesComponent implements OnInit {

  constructor(
    private referService: ReferJobPostService,
    private router: Router,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private dbService: AuthService,
    private toast: ToastService
  ) { }

  allReferedProfiles: any[] = [];
  isServiceRunning = false;
  myForm: FormGroup;
  hiredJobs = 0;
  shortlistedJobs = 0;
  user = JSON.parse(window.atob(window.localStorage.getItem('id')));

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

  currProfile;

  ngOnInit() {
    this.myForm = new FormGroup({
      bankName: new FormControl(null, Validators.required),
      IFSCCode: new FormControl(null, Validators.required),
      accountHolderName: new FormControl(null, Validators.required),
      accountNumber: new FormControl(null, Validators.required),
    });
    this.isServiceRunning = true;
    this.referService.getReferedJobPosts({
      email:
        (JSON.parse(window.atob(window.localStorage.getItem('id')))).email
    })
      .subscribe((data: any) => {
        if (data.data) {
          if (data.data.length > 0) {
            this.allReferedProfiles = data.data;
            data.data.forEach(element => {
              if (element.status === 'Shortlisted')
              {this.shortlistedJobs++; }
              if (element.status === 'Hired')
              {this.hiredJobs++; }
            });
            this.allReferedProfiles.map((pr: any) => {
              pr.isStatus = true;

            });
          }
        }
        this.isServiceRunning = false;
      });
  }

  seeDetails(id: any) {
    this.router.navigateByUrl(`/referer/jobs/job-detail/${id}`);
  }

  openResume(resume: any) {
    window.open(resume);
  }
  openModal(template: any, index: number) {
    this.currProfile = index,
      this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  close() {
    this.modalRef.hide();
  }


  submit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      this.isServiceRunning = true;
      const time = new Date().getTime();
      const email = {
        email: 'refer2career@gmail.com',
        subject: `Encashment Request ${time}!`,
        content: `<p>Hello </p><p>Enacashment request from  ${this.user.name}.</p><h3>Bank details</h3>
        <ul>
          <li>Bank Name: ${this.myForm.get('bankName').value}</li>
          <li>IFSC Code: ${this.myForm.get('IFSCCode').value}</li></li>
          <li>Account Holder Name: ${this.myForm.get('accountHolderName').value}</li></li>
          <li>Account Number: ${this.myForm.get('accountNumber').value}</li></li>
        </ul>
        <p></p><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
      };
      this.dbService.sendMail(email).subscribe((jata: any) => {
        if (jata.data) {

          const db: DbOperation = {
            collection: 'encashment',
            data: {
              referenceNumber: time,
              name: this.user.name,
              email: this.user.email,
              referedName: this.allReferedProfiles[this.currProfile].name,
              referedEmail: this.allReferedProfiles[this.currProfile].email,
              jobTitle: this.allReferedProfiles[this.currProfile].jobTitle,
              jobId: this.allReferedProfiles[this.currProfile].jobId,
              refredProfileId: this.allReferedProfiles[this.currProfile]._id,
              companyName: this.allReferedProfiles[this.currProfile].companyName,
              referedOn: this.allReferedProfiles[this.currProfile].createdAt,
              createdAt: new Date(),
            }
          };
          this.dbService.create(db).then((data: any) => {
            if (data.data) {
              this.toast.showToast('Request Submitted Successfully!');
            }
            else {
              this.toast.showToast('Something went worng', 'bg-red');
            }
            this.close();
            this.isServiceRunning = false;
          });
        }
        else {
          this.close();
          this.isServiceRunning = false;
          this.toast.showToast('Something went worng', 'bg-red');
        }
      });
    }
  }

}
