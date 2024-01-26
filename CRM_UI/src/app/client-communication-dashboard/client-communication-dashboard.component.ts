import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-communication-dashboard',
  templateUrl: './client-communication-dashboard.component.html',
  styleUrls: ['./client-communication-dashboard.component.css']
})
export class ClientCommunicationDashboardComponent implements OnInit {
  tempArray = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

  changePosition(){

  }

}
