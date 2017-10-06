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
  dateVar: Date;
  
  constructor(public apiRequestsService: ApiRequestsService) {
    apiRequestsService.getVisits().subscribe(response => this.visits = response);
  }

  
  sortDate() {
    this.apiRequestsService.sortVisits().subscribe((response) => this.visits = response); 
  }

  filterDate() {
    this.apiRequestsService.filterVisits(this.dateVar).subscribe((response) => this.visits = response); 
  }

  ngOnInit() {
  }

}
