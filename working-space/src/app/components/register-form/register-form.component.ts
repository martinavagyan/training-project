import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Registration } from '../../registration';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registration: Registration = {
    id: '',
    name: '',
    email: '',
    date: new Date(),
    host: {
      id: 0,
      name: '',
      email: ''
    },
  };

  constructor() { }

  submitForm(values) {
    console.log(values);
  }

  ngOnInit() {
  }

  onFormSubmitted() {
    console.log(this.registration);
    this.registration.date = new Date();
  }

  addHost<User>(hostUser) {
    this.registration.host = hostUser;
  }
}
