import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from "lodash";

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  grid: any = [];
  gridResponse: any = [];
  quickSearch = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.gridResponse = [
      {
        clientName: "Google",
        email: "admin@google.com",
        contactNo: "1247895314"
      },
      {
        clientName: "Amazon",
        email: "admin@Amazon.com",
        contactNo: "1247895314"
      },
      {
        clientName: "FlipCart",
        email: "admin@flipcart.com",
        contactNo: "1247895314"
      },
      {
        clientName: "LinkedIn",
        email: "admin@linkedin.com",
        contactNo: "1247895314"
      },
      {
        clientName: "HDFC",
        email: "admin@hdfc.com",
        contactNo: "1247895314"
      }
    ];

    this.grid = this.gridResponse;

  }

  onActionClick(source: string) {
    if (source === "edit") {
      //api call
    } else {
      //api call
    }
  }

  onModelChange(event: any) {
    this.searchByQuickSearch(event);
  }

  searchByQuickSearch(event: any) {
    if (event) {
      let searchStr = event.toLowerCase()
      this.grid = [];

      for (const client of this.gridResponse) {
        _.forIn(client, (objVal, objKey) => {
          if (objVal.toLowerCase().includes(searchStr) && !this.grid.includes(client)) {
            this.grid.push(client);
          }
        });
      }
    } else {
      this.grid = this.gridResponse;
    }
  }

}
