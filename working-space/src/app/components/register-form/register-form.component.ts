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

  onFormSubmitted() {
    console.log(this.registration);
    this.registration.date = new Date();
    //http request
    let jsonBody = { 
        "id": 1,
        "name": "lars",
        "email": "asd@email.com",
        "date": "Wed Oct 04 2017 16:08:22 GMT+0200 (CEST)",
        "host": "{ \"id\": 1, \"name\":\"lars\",\"email\": \"email@email.com\", \"_id\": \"sadasdasdsa\"}"
    };
    this.apiRequestsService.createVisit(jsonBody).subscribe();
  }

  addHost<User>(hostUser) {
    this.registration.host = hostUser;
  }
}
