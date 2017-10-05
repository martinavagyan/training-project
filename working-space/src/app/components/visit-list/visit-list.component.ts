import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Visit } from '../../visit';
import { ApiRequestsService } from '../../api-requests.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  visits: Visit[] = [];

  @Output()
  onUserClick = new EventEmitter<void>();
  
  constructor(public apiRequestsService: ApiRequestsService) {
    apiRequestsService.getVisits().subscribe(response => this.visits = response);
  }

  
  userClicked(user){
    console.log("the user with id: " + user.id + " , is clicked");
    this.onUserClick.emit(user);
  }

  ngOnInit() {
  }

}
