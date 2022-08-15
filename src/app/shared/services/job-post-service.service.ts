import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobPostServiceService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = '';

  post: any = undefined;
  jobPosts: Subject<any> = new Subject<any>();
  postDetail: any = {};

  myApplications: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
  this.getPosts();
  }

  getMyApplications() {
    this.appliedJobPost({ candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }).subscribe((data: any) => {
      if (data.data) {
        this.myApplications.next(data.data);
      }
    });
  }

  getPosts() {
    if (window.localStorage.getItem('id')){
      if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === 1) {
        this.getJobPostsByEmployer({ _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }).subscribe((data: any) => {
          this.jobPosts.next(data.data);
        });
      }
      else {
        this.getAllJobPosts().subscribe((data: any) => {
          this.jobPosts.next(data.data);
        });
      }
    }
  }

  addJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/add/jobpost`, body, { headers: this.headers });
  }

  updateJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/update/jobpost`, body, { headers: this.headers });
  }

  deleteJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/delete/jobpost`, body, { headers: this.headers });
  }

  getAllJobPosts() {
    return this.http.post(this.baseUrl + `/api/getAll/jobposts`, { headers: this.headers });
  }

  getJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/get/jobpost`, body, { headers: this.headers });
  }

  applyJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/apply/jobpost`, body, { headers: this.headers });
  }

  appliedJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/applied/jobposts`, body, { headers: this.headers });
  }

  getJobPostsByEmployer(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/employer/jobposts`, body, { headers: this.headers });
  }
}
