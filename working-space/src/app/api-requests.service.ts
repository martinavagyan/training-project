import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class ApiRequestsService {

  apiEndpoint:string = 'http://localhost:3000/api/';
  getUsersEndpoint:string = 'get-all-users/';
  createVisitEndpoint:string = 'visit/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiEndpoint+this.getUsersEndpoint);
  }

  createVisit(jsonBody): Observable<User> {
    return this.http.post<User>(this.apiEndpoint+this.createVisitEndpoint,jsonBody);
  }

}