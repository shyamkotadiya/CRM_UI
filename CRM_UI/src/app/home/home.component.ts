import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private commonService:ComponentCommunicationServiceService) { }

  ngOnInit(): void {
  }

  expandSection(source:string){

  }

  onLinkClick(source:string){
    if(source === 'createClientLead'){
      this.commonService.navigateToCreateClientLead();
    }else if(source ==='searchClientLead'){
      this.commonService.navigateByUrl('/clientLead/search');
    }else if(source ==='clientDashboard'){
      this.commonService.navigateByUrl('dashboard/clientCommunication');
    }

  }


}
