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
  registration: Registration = {host: {name:''}};

  constructor(public apiRequestsService: ApiRequestsService) { }
  

  submitForm(values) {
    console.log(values);
  }
  ngOnInit() {
  }


  addPicture(pic) {
    console.log('PICTURE ',pic);
    this.registration.email = pic;
  }

  onFormSubmitted() {
    console.log(this.registration);
    this.registration.date = new Date();
    //http request
    this.apiRequestsService.createVisit(this.registration).subscribe();
  }

  addHost<User>(hostUser) {
    this.registration.host = hostUser;
  }
}
