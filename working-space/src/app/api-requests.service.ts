import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { Visit } from './visit';

@Injectable()
export class ApiRequestsService {

  apiEndpoint:string = 'http://localhost:3000/api/';
  getUsersEndpoint:string = 'get-all-users/';
  getHostEndpoint:string = 'get-all-hosts/';
  createVisitEndpoint:string = 'visit/';
  
  getVisitEndpoint:string = 'get-all-visits/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiEndpoint+this.getUsersEndpoint);
  }

  createVisit(jsonBody): Observable<Visit> {
    return this.http.post<Visit>(this.apiEndpoint+this.createVisitEndpoint,jsonBody);
  }
  
  getVisits(): Observable<[Visit]> {
    return this.http.get<[Visit]>(this.apiEndpoint+this.getVisitEndpoint);
  }

  getHosts(): Observable<[User]>{
    return this.http.get<[User]>(this.apiEndpoint+this.getHostEndpoint);
  }

}