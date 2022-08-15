import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobPostServiceService } from 'src/app/shared/services/job-post-service.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
})
export class MyApplicationsComponent implements OnInit {

  isServiceRunning = false;
  hiredJobs = 0;
  shortlistedJobs = 0;
  constructor(
    private jobService: JobPostServiceService,
    private router: Router
  ) { }

  allAppliedPosts: any[] = [];
  allJobPosts: any[] = [];

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

  ngOnInit() {
    this.isServiceRunning = true;
    this.jobService.getMyApplications();
    this.jobService.myApplications.subscribe((data: any) => {
      if (data.length > 0) {
        this.isServiceRunning = false;
        this.allAppliedPosts = [];
        this.getAllAppliedPosts(data);
      }
    });
  }

  getAllAppliedPosts(data: any) {
    this.isServiceRunning = true;
    this.allAppliedPosts.length = 0;
    data.forEach((post, index) => {
      this.jobService.getJobPost({ id: post.jobPostId }).subscribe((jobPost: any) => {
        if (jobPost.data !== null && jobPost.data !== undefined) {
          jobPost.appliedDate = post.date;
          jobPost.status = post.status;
          if (jobPost.status === 'Hired')
            {this.hiredJobs++; }
          if (jobPost.status === 'Shortlisted')
            {this.shortlistedJobs++; }
          jobPost.jobPost = jobPost.data.jobPost;
          jobPost.referReward = jobPost.data.referReward;
          this.allAppliedPosts.push(jobPost);
        }
        if (index === data.length - 1) {
          this.isServiceRunning = false;
          this.allAppliedPosts.sort((a: any, b: any) => {
            const dateA = new Date(a.appliedDate).getTime();
            const dateB = new Date(b.appliedDate).getTime();
            return dateB - dateA;
          }
          );
        }
      });
    });
  }

  seeDetails(id: any) {
    this.router.navigateByUrl(`/referer/jobs/job-detail/${id}`);
  }

  getExperience(value: number) {
    return `${value} - ${value + 1}`;
  }

  getStartDate(date: any) {
    const date1: any = new Date();
    const date2: any = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 7;
  }

}
