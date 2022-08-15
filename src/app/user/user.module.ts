import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { IonicModule } from '@ionic/angular';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ReferedProfilesComponent } from './refered-profiles/refered-profiles.component';




@NgModule({
  declarations: [
    UserDashboardComponent,
    UserProfileComponent,
    UsermenuComponent,
    JobDetailComponent,
    UserMessagesComponent,
    UserPageComponent,
    UserJobsComponent,
    MyApplicationsComponent,
    ReferedProfilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    IonicModule,
    PopoverModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
