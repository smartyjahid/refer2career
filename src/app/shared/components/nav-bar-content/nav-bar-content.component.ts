import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.scss'],
})
export class NavBarContentComponent implements OnInit {

  @Input() navItems: any[] = [];

  url = '';

  isCollapsed = true;

  constructor(
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private router: Router,
  ) { }

  navigate(url: string) {
    this.isCollapsed = true;
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.url = this.router.url;
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

}
