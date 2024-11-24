import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {
  quickSearch = new FormControl('');
  grid: Array<any> = [];
  gridResponse: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.gridResponse = [
      {
        id: 1,
        project: "Oriano",
        title: "Analysis",
        status: "inProgress",
        priority: 1,
        description: "05/01/2023",
        leadSource: "Google Ad",
        requirements: "Whats app only",
      },
      {
        id: 2,
        project: "Oriano",
        title: "Design",
        status: "open",
        description: "02/01/2023",
        priority: 5,
        requirements: "No Call Only Text message"
      },
      {
        id: 3,
        project: "Oriano",
        title: "Implementation",
        status: "pending",
        priority: 10,
        description: "01/01/2022",
        leadSource: "Facebook Ad",
        requirements: "Call Before 12"
      },
      {
        id: 4,
        project: "Sem",
        title: "Analysis",
        status: "inProgress",
        leadSource: "Telecaller",
        description: "12/12/2022",
        priority: 1,
        requirements: "Call After 5"
      },
      {
        id: 5,
        project: "Sem",
        title: "Implementation",
        status: "open",
        priority: 1,
        leadSource: "Reference",
        description: "12/01/2022",
        requirements: "No req"
      },
    ];

    this.grid = this.gridResponse;
  }

  onModelChange(event: any): void {
    this.searchByQuickSearch(event);
  }

  searchByQuickSearch(event: any) {
    if (event) {
      let searchStr = event.toLowerCase()
      this.grid = [];
      this.gridResponse.forEach((data: any) => {
        if (data.project.toLowerCase().includes(searchStr) || data.title.toLowerCase().includes(searchStr)
          || data.status.toLowerCase().includes(searchStr) || data.priority.toLowerCase().includes(searchStr)
          || data.leadSource.toLowerCase().includes(searchStr) || data.description.toLowerCase().includes(searchStr)
          || data.requirements.toLowerCase().includes(searchStr)) {
          this.grid.push(data);
        }
      })
    } else {
      this.grid = this.gridResponse;
    }
  }

  onActionClick(source: string): void {

  }
}
