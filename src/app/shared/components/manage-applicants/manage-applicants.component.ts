import { UserRole } from 'src/app/shared/models/enums';
import { Router } from '@angular/router';
import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-applicants',
  templateUrl: './manage-applicants.component.html',
  styleUrls: ['./manage-applicants.component.scss'],
})
export class ManageApplicantsComponent implements OnInit {

  allPosts: any = [];
  isServiceRunning = false;

  constructor(
    private dbService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    this.isServiceRunning = true;
    const dbOperation: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.createdBy': JSON.parse(window.atob(window.localStorage.getItem('id')))._id }
    };
    this.dbService.find(dbOperation).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.allPosts = data.data;
        this.allPosts.sort((a: any, b: any) => {
          const c: any = new Date(a.jobPost.createdAt);
          const d: any = new Date(b.jobPost.createdAt);
          return d - c;
        });
      }
      this.isServiceRunning = false;
    });
  }

  navigate(id: any) {
    if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.ADMIN) {
      this.router.navigateByUrl(`/admin/applicants/${id}`);
    }
    else { this.router.navigateByUrl(`/recruiter/applicants/${id}`); }
  }

}
