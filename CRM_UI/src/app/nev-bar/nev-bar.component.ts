import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';

@Component({
  selector: 'app-nev-bar',
  templateUrl: './nev-bar.component.html',
  styleUrls: ['./nev-bar.component.css']
})
export class NevBarComponent implements OnInit {

  constructor(private componentCommunication:ComponentCommunicationServiceService) { }

  ngOnInit(): void {
    this.hideShowArrow('clientDownArrowClass', true);
    this.hideShowArrow('clientUpArrowClass', false);

    this.hideShowArrow('dashboardDownArrowClass', true);
    this.hideShowArrow('dashboardUpArrowClass', false);
  }

  hideShowArrow(classString: string, show: boolean) {
    if (show) {
      $('.' + classString).show();
    } else {
      $('.' + classString).hide();
    }
  }

  clickOnLink(source: string) {

    switch (source) {
      case "createLead":
        this.componentCommunication.navigateByUrl("clientLead/create");
        break;
        case "searchLead":
        this.componentCommunication.navigateByUrl("clientLead/search");
        break;
      case "home":
        this.componentCommunication.navigateByUrl("home");
        break;

      default:
        break;
    }
  }

  mouseAction(source: string, event: any, actionSource: string) {
    if (actionSource === 'onHover') {
      if (source === 'clientLead') {
        $('.clientSubMenu').slideDown();
        this.hideShowArrow('clientUpArrowClass', true);
        this.hideShowArrow('clientDownArrowClass', false);
      } else {
        $('.dashboardSubMenu').slideDown();
        this.hideShowArrow('dashboardUpArrowClass', true);
        this.hideShowArrow('dashboardDownArrowClass', false);
      }
    } else {
      if (source === 'clientLead') {
        $('.clientSubMenu').slideUp();
        this.hideShowArrow('clientUpArrowClass', false);
        this.hideShowArrow('clientDownArrowClass', true);
      } else {
        $('.dashboardSubMenu').slideUp();
        this.hideShowArrow('dashboardUpArrowClass', false);
        this.hideShowArrow('dashboardDownArrowClass', true);

      }
    }
  }

}
