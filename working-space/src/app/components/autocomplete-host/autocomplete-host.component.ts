import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { User } from '../../user';
import { ApiRequestsService } from '../../api-requests.service';


@Component({
  selector: 'app-autocomplete-host',
  templateUrl: './autocomplete-host.component.html',
  styleUrls: ['./autocomplete-host.component.css']
})
export class AutocompleteHostComponent {

  myControl = new FormControl();

  hosts: Array<User> = [];

  constructor(public apiRequestsService: ApiRequestsService) {
    apiRequestsService.getHosts().subscribe(response => this.hosts = response);
  }

  filteredOptions: Observable<User[]>;

  @Output()
  onHostClicked = new EventEmitter<void>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
        .startWith(null)
        .map(host => host && typeof host === 'object' ? host.name : host)
        .map(name => name ? this.filter(name) : this.hosts.slice());
  }

  hostClicked(host){
    console.log(host);
    this.onHostClicked.emit(host);
  }

  filter(name: string): User[] {
    return this.hosts.filter(host =>
      host.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: User): any {
    return user ? user.name : user;
  }

}