import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UsersService } from '../../users.service';
import { User } from '../../user';
import { ApiRequestsService } from '../../api-requests.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  @Output()
  onUserClick = new EventEmitter<void>();
  
  constructor(private userSvc:UsersService) {
    var getAllUsers = setTimeout(() => this.users = userSvc.getUsers(), 1000);    
  }

  userClicked(user){
    console.log("the user with id: " + user.id + " , is clicked");
    this.onUserClick.emit(user);
  }

  ngOnInit() {
  }

}
