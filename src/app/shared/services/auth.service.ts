import { DbOperation } from './../models/dbOperation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any = {};

  isScreenBig = false;

  currentUser: Subject<any> = new Subject<any>();

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
    this.getCurrentUser();
    if (window.screen.width > 1150) {
      this.isScreenBig = true;
    }
    if (window.localStorage.getItem('id')) {
      const dbOperation: DbOperation = {
        collection: 'users',
        query: { _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }
      };
      this.find(dbOperation).subscribe((data: any) => {
        if (data.data) { this.user = data.data[0]; }
      });
    }

  }

  linkedInLogin() {
    return this.http.get(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8084%2Fcallback%2F&scope=r_emailaddress%20r_liteprofile&client_id=78pijkn0197pgp`, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
  }

  getCurrentUser() {
    if (window.localStorage.getItem('id')) {
      this.getDetails({ email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email })
        .subscribe((data: any) => {
          this.currentUser.next(data.data);
        });
    }
  }

  registerCandidate(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/register/candidate`, body, { headers: this.headers });
  }

  verifyOTP(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/verify/candidate`, body, { headers: this.headers }).toPromise();
  }

  login(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/login`, body, { headers: this.headers }).toPromise();
  }

  updateAdminDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/updateAdminDetails`, body, { headers: this.headers }).toPromise();
  }

  create(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/create`, body, { headers: this.headers }).toPromise();
  }

  update(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/update`, body, { headers: this.headers }).toPromise();
  }

  find(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/find`, body, { headers: this.headers });
  }

  updateUserDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/updateUserDetails`, body, { headers: this.headers }).toPromise();
  }

  getDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/getDetails`, body, { headers: this.headers });
  }

  getOTP(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/otpRequest`, body, { headers: this.headers });
  }

  sendMail(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/send-mail`, body, { headers: this.headers });
  }

  verify(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/verifyOTP`, body, { headers: this.headers });
  }

}
