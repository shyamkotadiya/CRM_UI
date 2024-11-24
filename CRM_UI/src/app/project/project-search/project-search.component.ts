import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {

  gridResponse: any;
  grid: any;
  quickSearch = new FormControl('');
  constructor(private router: Router
  ) { }

  ngOnInit(): void {
    this.gridResponse = [
      {
        id: 1,
        clientName: "Shyam",
        projectTitle: "Oracle",
        startDate: "05/01/2023",
        projectDescription: "Google Ad",

      },
      {
        id: 2,
        clientName: "Virat",
        projectTitle: "Zeus",
        projectDescription: "Indiamart",
        startDate: "02/01/2023",
      },
      {
        id: 3,
        clientName: "Brijesh",
        projectTitle: "Terx",
        startDate: "01/01/2022",
      },
      {
        id: 4,
        clientName: "Rahul",
        projectTitle: "Space O",
        projectDescription: "Telecaller",
        startDate: "12/12/2022",
      },
      {
        id: 5,
        clientName: "Kuldeep",
        projectTitle: "Mark G",
        projectDescription: "Reference",
      },
    ];
    this.grid = this.gridResponse;
  }
  onModelChange(event: any) {
    let quickVal = this.quickSearch.value?.toLowerCase();
    if (this.quickSearch.value) {
      this.grid = _.filter(this.gridResponse, (element) => {
        return element.clientName.toLowerCase().includes(quickVal) ||
          element.projectTitle.toLowerCase().includes(quickVal) ||
          element.projectDescription.toLowerCase().includes(quickVal);
      });
    } else {
      this.grid = this.gridResponse;
    }
  }

  onActionClick(action: string, id: any) {
    if (action === 'delete') {
      //api call
      //refresh grid after success
      
    } else {
      this.router.navigateByUrl("project/edit/"+id);
    }
  }

}
