import { Injectable } from '@angular/core';
import { User } from './user';
import { find } from 'lodash';

@Injectable()
export class UsersService {

  users: User[] = [
    {
      entryId: 1,
      name: 'Martin',
      email: 'martinavagyan@gmail.com'
    },
    {
      entryId: 5,
      name: 'Lars',
      email: 'larssteenhuis@gmail.com'
    },
    {
      entryId: 3,
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
