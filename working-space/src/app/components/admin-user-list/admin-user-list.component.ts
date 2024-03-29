import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UsersService } from '../../users.service';
import { User } from '../../user';
import { ApiRequestsService } from '../../api-requests.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users: Array<User> = [];

  @Output()
  onUserClick = new EventEmitter<void>();
  
  constructor(private userSvc:UsersService) {    
    this.users = userSvc.getUsers();
  }

  ngOnInit() {
  }

}
