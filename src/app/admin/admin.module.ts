import { EncashmentComponent } from './encashment/encashment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JobDetailsAdminComponent } from './job-details-admin/job-details-admin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { IonicModule } from '@ionic/angular';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { MessagesComponent } from './messages/messages.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { ApplicantsComponent } from './applicants/applicants.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminmenuComponent,
    MessagesComponent,
    EmployerPageComponent,
    JobPostsComponent,
    AddOrganizationComponent,
    JobDetailsAdminComponent,
    ApplicantsComponent,
    FeedbackComponent,
    EncashmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    IonicModule
  ],
  entryComponents: [
    AddOrganizationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
