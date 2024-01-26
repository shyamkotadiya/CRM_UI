import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCommunicationServiceService } from './common/component-communication-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'CRM_Portal';
  isLogin: Boolean = false;

  constructor(private router: Router,
    private componentCommunicationService: ComponentCommunicationServiceService) { }

  ngOnInit(): void {
    this.isLogin = sessionStorage.getItem("isLogin") ? true : false;
    this.componentCommunicationService.dataTransferToCompoenentObservable.subscribe((data) => {
      if (data.from === 'login') {
        setTimeout(() => {
          this.isLogin = sessionStorage.getItem("isLogin") ? true : false;
          
        }, 0);
      }
    })
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked() {
  }

}
