import { EncashmentComponent } from './encashment/encashment.component';
import { ViewProfileComponent } from './../shared/components/view-profile/view-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ApplicationsComponent } from './../shared/components/applications/applications.component';
import { ApplicantsComponent } from './../employer/applicants/applicants.component';
import { JobDetailsAdminComponent } from './job-details-admin/job-details-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: AdminmenuComponent
      },
      {
        path: 'profile', component: AdminProfileComponent
      },
      {
        path: 'organizations', component: EmployerPageComponent
      },
      {
        path: 'applicants', component: ApplicantsComponent
      },
      {
        path: 'applicants/profile/:id', component: ViewProfileComponent
      },
      {
        path: 'applicants/:jobId', component: ApplicationsComponent
      },
      {
        path: 'jobs', component: JobPostsComponent
      },
      {
        path: 'jobs/detail/:id', component: JobDetailsAdminComponent
      },
      {
        path: 'feedback', component: FeedbackComponent
      },
      {
        path: 'encashment', component: EncashmentComponent
      },
      {
        path: 'messages', component: MessagesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
