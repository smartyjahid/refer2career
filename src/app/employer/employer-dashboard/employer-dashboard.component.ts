import { UserRole } from 'src/app/shared/models/enums';
import { DbOperation } from 'src/app/shared/models/dbOperation';
import { CountryStateCityService } from './../../shared/services/country-state-city.service';
import { MenuController } from '@ionic/angular';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss'],
})
export class EmployerDashboardComponent implements OnInit {

  modalRef: BsModalRef;
  type = null;
  description = '';

  user = JSON.parse(window.atob(window.localStorage.getItem('id')));


  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private csc: CountryStateCityService,
    private dbService: AuthService,
    private toast: ToastService,
    private router: Router
  ) { }

  ngOnInit() {

    console.log(this.user);
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
    this.router.navigateByUrl("login");
    window.location.reload();
  }


  send() {
    if (this.type) {
      const arr: any[] = this.description.split(' ');
      if (arr.length > 9) {
        const db: DbOperation = {
          collection: 'feedback',
          data: {
            email: this.user.email,
            name: this.user.organizationDetails.organizationName,
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
