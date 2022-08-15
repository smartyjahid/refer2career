import { slider } from './../../animations';
import { Router, RouterOutlet } from '@angular/router';
import { UserRole } from 'src/app/shared/models/enums';
import { AuthService } from './../../shared/services/auth.service';
import { DbOperation } from './../../shared/models/dbOperation';
import { ToastService } from './../../shared/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  animations: [ slider ]
})
export class UserDashboardComponent implements OnInit {
  modalRef: BsModalRef;

  type = null;
  description = '';

  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private toast: ToastService,
    private dbService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  toggle() {
    this.menu.toggle();
  }

  openModal(template: any) {
    this.toggle();
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
