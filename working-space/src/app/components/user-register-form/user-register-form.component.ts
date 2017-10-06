import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ApiRequestsService } from '../../api-requests.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css'],
})
export class UserRegisterFormComponent implements OnInit {


  user: User = {};

  constructor(public apiRequestsService: ApiRequestsService, private userSvc:UsersService) { }
  submitForm(values) {
    console.log(values);
  }
  ngOnInit() {
  }
  onFormSubmitted() {
    this.user.entryId = 0;
    this.apiRequestsService.createHost(this.user).subscribe();
    this.apiRequestsService.getHosts().subscribe(response => this.userSvc.users = response);
  }
}
