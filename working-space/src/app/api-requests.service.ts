import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class ApiRequestsService {

  apiEndpoint:string = 'http://localhost:3000/api/';
  getUsersEndpoint:string = 'get-all-users/';
  createVisitEndpoint:string = 'visitor/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    // fetch quote from http://forismatic.com/en/api/
    // see file proxy.conf.json for http proxy to avoid issue with CORS (Cross-Origin-Request-Sharing)
    return this.http.get<User>(this.apiEndpoint+this.getUsersEndpoint);
  }

  createVisit(jsonBody): Observable<User> {
    // fetch quote from http://forismatic.com/en/api/
    // see file proxy.conf.json for http proxy to avoid issue with CORS (Cross-Origin-Request-Sharing)
    return this.http.post<User>(this.apiEndpoint+this.createVisitEndpoint,jsonBody);
  }

}