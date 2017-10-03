import { Injectable } from '@angular/core';
import { User } from './user';
import { find } from 'lodash';

@Injectable()
export class UsersService {

  users: User[] = [
    {
      id: 1,
      name: 'Martin',
      email: 'martinavagyan@gmail.com'
    },
    {
      id: 5,
      name: 'Lars',
      email: 'larsstain@yahoo.com'
    },
    {
      id: 3,
      name: 'Daan',
      email: 'dan-van@ibm.com'
    }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  fetchUser(id: number): User {
    return find(this.users, {id});
  }
}
