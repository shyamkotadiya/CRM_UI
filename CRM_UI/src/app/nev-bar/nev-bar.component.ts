import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';
import { MenuService } from '../common/menu.service';

@Component({
  selector: 'app-nev-bar',
  templateUrl: './nev-bar.component.html',
  styleUrls: ['./nev-bar.component.css']
})
export class NevBarComponent implements OnInit {
  menuJson: any = [];
  constructor(private componentCommunication: ComponentCommunicationServiceService,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuJson = this.menuService.getMenuItems();
  }

  ngAfterViewInit() {
    this.menuJson.forEach((menu: any) => {
      this.hideShowArrow((menu.menuId+'UpArrowClass'), false);  
    });
  }
  hideShowArrow(classString: string, show: boolean) {
    if (show) {
      $('.' + classString).show();
    } else {
      $('.' + classString).hide();
    }
  }

  clickOnLink(path: string) {
    this.componentCommunication.navigateByUrl(path);
    /* switch (source) {
      case "createClientLead":
        this.componentCommunication.navigateByUrl("clientLead/create");
        break;
      case "searchClientLead":
        this.componentCommunication.navigateByUrl("clientLead/search");
        break;
      case "home":
        this.componentCommunication.navigateByUrl("home");
        break;
      case "clientDashboard":
        this.componentCommunication.navigateByUrl("dashboard/clientCommunication");
        break;
      case "designDashboard":
        this.componentCommunication.navigateByUrl("home");
        break;
      case "createProject":
        this.componentCommunication.navigateByUrl("project/create");
        break;
      case "searchProject":
        this.componentCommunication.navigateByUrl("project/search");
        break;
      case "createClient":
        this.componentCommunication.navigateByUrl("client/create");
        break;

      default:
        break;
    } */
  }

  slideDownMenu(menu: string, arrowUpClass: string) {
    $('.' + menu).slideDown();
    this.hideShowArrow(arrowUpClass, true);
    this.hideShowArrow(arrowUpClass.replace('Up', 'Down'), false);
  }

  slideUpMenu(menu: string, arrowUpClass: string) {
    $('.' + menu).slideUp();
    this.hideShowArrow(arrowUpClass, false);
    this.hideShowArrow(arrowUpClass.replace('Up', 'Down'), true);
  }

  mouseAction(source: string, event: any, actionSource: string) {
    if (actionSource === 'onHover') {
      this.menuDownOnHover(source);
    } else {
      this.menuUpOnLeave(source);
    }
  }

  menuDownOnHover(source: string) {
    switch (source) {
      case 'clientLead':
        this.slideDownMenu('clientLeadSubMenu', 'clientLeadUpArrowClass');
        break;
      case 'dashboard':
        this.slideDownMenu('dashboardSubMenu', 'dashboardUpArrowClass');
        break;
      case 'project':
        this.slideDownMenu('projectSubMenu', 'projectUpArrowClass');
        break;
      case 'client':
        this.slideDownMenu('clientSubMenu', 'clientUpArrowClass');
        break;
    }
  }

  menuUpOnLeave(source: string) {

    switch (source) {
      case 'clientLead':
        this.slideUpMenu('clientLeadSubMenu', 'clientLeadUpArrowClass');
        break;
      case 'dashboard':
        this.slideUpMenu('dashboardSubMenu', 'dashboardUpArrowClass');
        break;
      case 'project':
        this.slideUpMenu('projectSubMenu', 'projectUpArrowClass');
        break;
      case 'client':
        this.slideUpMenu('clientSubMenu', 'clientUpArrowClass');
        break;
    }
  }

}
