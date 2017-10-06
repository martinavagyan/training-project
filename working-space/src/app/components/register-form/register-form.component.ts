import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Registration } from '../../registration';
import { ApiRequestsService } from '../../api-requests.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  admin: boolean = false;
  registration: Registration = {host: {name:''}};

  constructor(public apiRequestsService: ApiRequestsService) { }
  

  submitForm(values) {
    console.log(values);
  }

  ngOnInit(){
  }


  showAdminPanel() {
    this.admin = !this.admin;
    this.apiRequestsService.getVisits().subscribe((out) => console.log(out)); 
  }

  onFormSubmitted() {
    console.log(this.registration);
    this.registration.date = new Date();
    //http request
    this.apiRequestsService.createVisit(this.registration).subscribe();
  }

  addHost<User>(hostUser) {
    //console.log(JSON.parse(hostUser));
    this.registration.host = hostUser;
  }
}
