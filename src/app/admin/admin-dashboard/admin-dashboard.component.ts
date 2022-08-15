import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() { }

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
    //this.modalRef.hide();
    //window.localStorage.removeItem('id');
    console.log("logout called!");
    window.open('https://dukaan.tk/login', "_self");
    console.log("urllll");
    window.open("https://refer2career.com/login", "_self");
  }



}
