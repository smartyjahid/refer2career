import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {


  currentUser: any = {};

  organization: any = undefined;

  headers = new HttpHeaders({ 'content-type': 'application/json' });
  public baseUrl = '';

  constructor(private http: HttpClient) {
  this.baseUrl = window.location.host.includes('localhost') ?  'http://localhost:8084' :  '' ;

   }

  addOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/add/organization`, body, { headers: this.headers }).toPromise();
  }

  updateOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/update/organization`, body, { headers: this.headers }).toPromise();
  }

  getOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/get/orgination`, body, { headers: this.headers });
  }

  getAllOrganizations() {
    return this.http.post(this.baseUrl + `/api/getAll/orginations`, { headers: this.headers });
  }
}
