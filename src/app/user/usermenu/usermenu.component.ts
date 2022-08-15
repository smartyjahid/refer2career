import { UserRole } from 'src/app/shared/models/enums';
import { DbOperation } from './../../shared/models/dbOperation';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss'],
})
export class UsermenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private toast: ToastService,
    private dbService: AuthService,
    private router: Router
  ) {
  }

  modalRef: BsModalRef;
  user: any;
  isServiceRunning = false;

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


  // feedback------------------


  type = null;
  description = '';


  scrollToJobs() {
    document.getElementById('jobs').scrollIntoView({
      behavior: 'smooth'
    });
  }

  getName(name: string) {
    return name.split(' ')[0];
  }

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    // this.user = this.authService.user;
    this.getUser();
  }

  toggle() {
    if (window.screen.width < 990) {
      this.menu.toggle();
    }
  }

  getUser() {
    // this.isServiceRunning = true;
    this.dbService.find({
      collection: 'users', query: {
        _id: this.user._id
      }
    }).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.user = data.data[0];
        // this.setBasicInfo();
        // this.isServiceRunning = false;
        window.localStorage.setItem('id', window.btoa(JSON.stringify(this.user)));
      }
    });
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
            from: UserRole.CANDIDATE
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
