import { OrganizationsService } from './../../shared/services/organizations.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddOrganizationComponent } from '../add-organization/add-organization.component';

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.scss'],
})
export class EmployerPageComponent implements OnInit {

  allOrganizations: any[] = [];
  isServiceRunning = false;

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private orgService: OrganizationsService
  ) { }

  ngOnInit() {
    this.isServiceRunning = true;
    this.orgService.getAllOrganizations().subscribe((data: any) => {
      this.allOrganizations = data.data;
      this.isServiceRunning = false;
    });
  }

  addOrganization() {
    this.orgService.organization = undefined;
    this.modalRef = this.modalService.show(AddOrganizationComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }

  seeDetails(organization: any) {
    this.orgService.organization = undefined;
    this.orgService.organization = organization;
    this.modalRef = this.modalService.show(AddOrganizationComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }

}
