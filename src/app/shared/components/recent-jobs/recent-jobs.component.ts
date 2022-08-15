import { Component, OnInit, Input } from '@angular/core';
import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { JobPostServiceService } from '../../services/job-post-service.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.scss'],
})
export class RecentJobsComponent implements OnInit {

  constructor(
    private jobPostService: JobPostServiceService,
    private router: Router,
    private authService: AuthService,
  ) { }

  role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
  @Input() isUser = true;
  allJobPost: any[] = [];
  filteredJobPosts: any[] = [];

  myControl = new FormControl();
  options: any[] = ['Delivery boy', 'Software engineer', 'UI designer'];
  filteredOptions: Observable<any[]>;

  isSortByExpanded = false;
  isLocationExpanded = false;
  isPartTimeExpanded = false;
  isJobCategoryExpanded = false;
  isRemoteExpanded = false;
  isExperienceExpanded = false;

  allLocations: Set<string> = new Set<string>();
  selectedLocations: Set<string> = new Set<string>();
  selectedLocationsArray: any[] = [];

  isRelevent = false;
  isServiceRunning = false;

  isSortBy = false;

  isScreenBig = false;

  refineInitial: any = {
    partTime: false,
    fullTime: false,
    jobs: false,
    internships: false,
    remote: false,
    minExp: 0,
    location: []
  };

  refineDefaultInitial: any = {
    partTime: false,
    fullTime: false,
    jobs: false,
    internships: false,
    remote: false,
    minExp: 0,
    location: []
  };

  refine: any = {
    partTime: false,
    fullTime: false,
    jobs: false,
    internships: false,
    remote: false,
    minExp: 0,
    location: []
  };

  refineJobsDropDown = false;

  allMyApplications: any[] = [];
  user = JSON.parse(window.atob(window.localStorage.getItem('id')));

  isChanged(): boolean {
    return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
  }

  isFilterAdded(): boolean {
    return !(JSON.stringify(this.refine) === JSON.stringify(this.refineDefaultInitial));
  }

  closeSortBy(value: any) {
    this.isSortBy = value;
    this.isSortByExpanded = false;
  }

  openRefineJobs() {
    if (!this.isScreenBig) {
      this.refineJobsDropDown = !this.refineJobsDropDown;
    }
  }

  getMyApplication() {
    const db = {
      collection: 'applyJob',
      query: { candidateId: this.user._id },
      selectedFields: { jobPostId: 1, _id: 0 },
    };
    this.authService.find(db).subscribe((data: any) => {
      if (data.data) {
        this.allMyApplications = data.data;
        this.checkJobPosts();
      }
    });
  }

  checkJobPosts() {
    this.allJobPost.forEach((post: any) => {
      if (this.allMyApplications.find(data => data.jobPostId === post._id)) {
        post.isApplied = true;
      }
    });
  }

  clearFilter() {
    this.refineInitial.partTime = this.refineDefaultInitial.partTime;
    this.refineInitial.fullTime = this.refineDefaultInitial.fullTime;
    this.refineInitial.jobs = this.refineDefaultInitial.jobs;
    this.refineInitial.internships = this.refineDefaultInitial.internships;
    this.refineInitial.remote = this.refineDefaultInitial.remote;
    this.refineInitial.minExp = this.refineDefaultInitial.minExp;
    this.refineInitial.location = this.refineDefaultInitial.location;

    this.refine.partTime = this.refineDefaultInitial.partTime;
    this.refine.fullTime = this.refineDefaultInitial.fullTime;
    this.refine.jobs = this.refineDefaultInitial.jobs;
    this.refine.internships = this.refineDefaultInitial.internships;
    this.refine.remote = this.refineDefaultInitial.remote;
    this.refine.minExp = this.refineDefaultInitial.minExp;
    this.refine.location = this.refineDefaultInitial.location;

    this.selectedLocations.clear();
    this.refineJobs();

    this.isSortByExpanded = false;
    this.isLocationExpanded = false;
    this.isPartTimeExpanded = false;
    this.isJobCategoryExpanded = false;
    this.isRemoteExpanded = false;
    this.isExperienceExpanded = false;
  }

  ngOnInit() {
    if (window.screen.width > 1150) {
      this.isScreenBig = true;
      this.refineJobsDropDown = true;
    }
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
    };
    this.authService.find(db).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.filteredJobPosts = data.data;
        this.allJobPost = data.data;
        this.getMyApplication();
        this.sortByDate();
        this.isServiceRunning = false;
      }
    });

    const dbOpeartion: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
      selectedFields: { 'jobPost.location': 1, _id: 0 },
    };
    this.authService.find(dbOpeartion).subscribe((data: any) => {
      if (data.data.length > 0) {
        data.data.forEach((ele: any) => {
          this.allLocations.add(ele.jobPost.location);
        });
      }
    });
  }

  seeDetails(data: any) {
    if (this.role === 2) {
      this.router.navigateByUrl(`/referer/jobs/job-detail/${data._id}`);
    }

    else if (this.role === 0) {
      this.router.navigateByUrl(`/admin/jobs/detail/${data._id}`);
    }

    else if (this.role === 1) {
      this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
    }
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  filterJobPosts() {
    let search = this.myControl.value;
    if (search) {
      search = search.toLowerCase();
    }
    else { search = ''; }
    this.filteredJobPosts = [];
    this.allJobPost.forEach((jobPost: any, index: number) => {
      if (jobPost.jobPost.title.toLowerCase().includes(search)) {
        this.filteredJobPosts.push(JSON.stringify(jobPost));
      }
      jobPost.jobPost.skills.forEach((element: any) => {
        const name: string = element.skillName;
        if (name.toLowerCase().includes(search)) {
          this.filteredJobPosts.push(JSON.stringify(jobPost));
        }
      });
      if (this.allJobPost.length === index + 1) {
        const arr: any[] = [...new Set(this.filteredJobPosts)];
        this.filteredJobPosts = [];
        arr.forEach(data => {
          this.filteredJobPosts.push(JSON.parse(data));
        });
      }
    });
  }

  sortByDate() {
    this.filteredJobPosts.sort((a: any, b: any) => {
      const dateA: any = new Date(a.jobPost.createdAt);
      const dateB: any = new Date(b.jobPost.createdAt);
      return dateB - dateA;
    });
  }

  getExperience(value: number) {
    return `${value}`;
  }

  getStartDate(date: any) {
    const date1: any = new Date();
    const date2: any = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 7;
  }

  updateLocation(event: any, location: string) {
    if (event.checked === true) {
      this.selectedLocations.add(location);
    }
    else { this.selectedLocations.delete(location); }
    this.refine.location = [...this.selectedLocations];
  }

  checkLocation(location: any) {
    return this.selectedLocations.has(location);
  }

  refineJobs() {
    this.isServiceRunning = true;
    const dbOpeartion: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
    };
    if (this.refine.partTime && this.refine.fullTime) {
      //
    }
    else if (this.refine.partTime) {
      dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
    }
    else if (this.refine.fullTime) {
      dbOpeartion.query['jobPost.partTime'] = false;
    }
    if (this.refine.jobs && this.refine.internships) {
      //
    }
    else if (this.refine.jobs) {
      dbOpeartion.query['jobPost.jobInternship'] = 'Job';
    }
    else if (this.refine.internships) {
      dbOpeartion.query['jobPost.jobInternship'] = 'Internship';
    }

    if (this.refine.remote) {
      dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
    }

    if (this.selectedLocations.size > 0) {
      dbOpeartion.query['jobPost.location'] = { $in: [...this.selectedLocations] };
    }

    if (this.refine.minExp > 0) {
      dbOpeartion.query['jobPost.experience'] = { $gt: this.refine.minExp ? this.refine.minExp - 1 : 0 };
    }

    this.authService.find(dbOpeartion).subscribe((data: any) => {
      if (data.data) {
        this.filteredJobPosts = data.data;
        this.allJobPost = data.data;
        this.checkJobPosts();
        this.refineInitial.partTime = this.refine.partTime,
          this.refineInitial.fullTime = this.refine.fullTime,
          this.refineInitial.jobs = this.refine.jobs,
          this.refineInitial.internships = this.refine.internships,
          this.refineInitial.remote = this.refine.remote,
          this.refineInitial.minExp = this.refine.minExp,
          this.refineInitial.location = this.refine.location;
        if (!this.isScreenBig) {
          this.refineJobsDropDown = false;
        }
        this.filterJobPosts();
        this.sortByDate();
        this.isServiceRunning = false;
      }
    });
  }

  navigateToAllJobs() {
    this.router.navigateByUrl(`/referer/jobs`);
  }

  navigateToMyProfile() {
    this.router.navigateByUrl(`/referer/profile`);
  }

}
