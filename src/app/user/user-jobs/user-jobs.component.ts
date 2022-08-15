import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss'],
})
export class UserJobsComponent {

  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: '/referer/dashboard'
    },
    {
      name: 'MY PROFILE',
      route: '/referer/profile'
    },
    {
      name: 'JOB POSTS',
      route: '/referer/jobs'
    },
    {
      name: 'APPLIED JOB',
      route: '/referer/my-applications'
    },
    {
      name: 'REFERRED PROFILE',
      route: '/referer/referred'
    }
  ];

}
