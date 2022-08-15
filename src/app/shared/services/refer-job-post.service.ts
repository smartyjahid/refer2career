import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReferJobPostService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = '';

  post: any = undefined;
  jobPosts: Subject<any> = new Subject<any>();
  postDetail: any = {};

  myApplications: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
  }

  referJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/referJobPost`, body, { headers: this.headers });
  }

  getReferedJobPosts(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/getReferedJobPosts`, body, { headers: this.headers });
  }

  uploadResume(data: any) {
    return this.http.post(this.baseUrl + `/api/upload-resume`, data).toPromise();
  }

  checkReferedProfile(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/check-refered-profile`, body, { headers: this.headers });
  }
}
