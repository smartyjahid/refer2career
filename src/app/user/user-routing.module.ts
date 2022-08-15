import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ReferedProfilesComponent } from './refered-profiles/refered-profiles.component';


const routes: Routes = [
  {
    path: '', component: UserDashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: UsermenuComponent, data: { animation: 'isRight'}
      },
      {
        path: 'profile', component: UserProfileComponent, data: { animation: 'isRight'}
      },
      {
        path: 'organizations', component: UserPageComponent, data: { animation: 'isRight'}
      },
      {
        path: 'jobs', component: UserJobsComponent, data: { animation: 'isRight'}
      },

      {
        path: 'jobs/job-detail/:id', component: JobDetailComponent, data: { animation: 'isRight'}
      },
      {
        path: 'my-applications', component: MyApplicationsComponent, data: { animation: 'isRight'}
      },
      {
        path: 'referred', component: ReferedProfilesComponent, data: { animation: 'isRight'}
      },
      {
        path: 'messages', component: UserMessagesComponent, data: { animation: 'isRight'}
      },
    ]
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class UserRoutingModule { }
