import { Injectable } from '@angular/core';
import { User } from './user';
import { find } from 'lodash';

@Injectable()
export class UsersService {

  users: User[] = [
    {
      entryId: 1,
      name: 'Martin',
      email: 'martinavagyan@gmail.com',
      _id: 'sds'
    },
    {
      entryId: 5,
      name: 'Lars',
      email: 'larsstain@yahoo.com',
      _id: 'sdss'
    },
    {
      entryId: 3,
      name: 'Daan',
      email: 'dan-van@ibm.com',
      _id: 'ssds'
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
