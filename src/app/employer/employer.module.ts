import { JobDetailsEmployerComponent } from './job-details-employer/job-details-employer.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployerMessagesComponent } from './employer-messages/employer-messages.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { EmployerProfleComponent } from './employer-profle/employer-profle.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerMenuComponent } from './employer-menu/employer-menu.component';
import { JobDetailsComponent } from '../shared/components/add-job-post/job-details/job-details.component';

@NgModule({
  declarations: [
    EmployerMenuComponent,
    EmployerDashboardComponent,
    EmployerProfleComponent,
    JobPostsComponent,
    ApplicantsComponent,
    EmployerMessagesComponent,
    JobDetailsEmployerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,
    EmployerRoutingModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployerModule {
  constructor() {
  }
}
