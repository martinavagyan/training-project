import { Injectable } from '@angular/core';
import { User } from './user';
import { find } from 'lodash';
import { ApiRequestsService } from './api-requests.service';

@Injectable()
export class UsersService {

  users: User[] = [];
  
  constructor(public apiRequestsService: ApiRequestsService) {
    apiRequestsService.getHosts().subscribe(response => this.users = response);
  }

  getUsers(): User[] {
    return this.users;
  }

  fetchUser(id: number): User {
    return find(this.users, {id});
  }
}
