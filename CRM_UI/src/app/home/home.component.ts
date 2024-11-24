import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';
import { MenuService } from '../common/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  menuConfiguration: any = []
  constructor(private commonService: ComponentCommunicationServiceService,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    //construct menu...
    this.menuConfiguration = this.menuService.getMenuItems();;
  }

  onLinkClick(menu: any) {
    this.commonService.navigateByUrl(menu.path);
  }


}
