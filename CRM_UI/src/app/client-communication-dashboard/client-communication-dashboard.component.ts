import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';
import * as _ from 'lodash';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-client-communication-dashboard',
  templateUrl: './client-communication-dashboard.component.html',
  styleUrls: ['./client-communication-dashboard.component.css']
})
export class ClientCommunicationDashboardComponent implements OnInit {
  tempArray = [1, 2, 3];
  statusPriorityMap: Map<number, string> = new Map();
  gridResponse: Array<any> = [];
  tasksByStatusMap: Map<string, Array<any>> = new Map();
  constructor(private commonService: ComponentCommunicationServiceService) { }

  ngOnInit(): void {
    this.statusPriorityMap.set(1, "pending");
    this.statusPriorityMap.set(2, "open");
    this.statusPriorityMap.set(3, "inProgress");
    this.statusPriorityMap.set(4, "complete");

    this.gridResponse = this.getTestJson();

    this.statusPriorityMap.forEach((element, key) => {
      this.tasksByStatusMap.set(element, _.filter(this.gridResponse, { "status": element }));
    })

    console.log(this.tasksByStatusMap);

  }

  getTestJson(): any[] {
    return [
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
      {
        id: 6,
        project: "Nervy",
        title: "Analysis",
        status: "open",
        priority: 1,
        leadSource: "Reference",
        description: "12/01/2022",
        requirements: "No req"
      },
    ];
  }

  changePosition(source: string, statusOfTask: string, indexOfTask: number) {
    let arrayOfCurrentTask: Array<any> = [];
      //API CALL TO SEND STATUS TO NEXT.... NTC
      arrayOfCurrentTask = this.tasksByStatusMap.get(statusOfTask) as Array<any>;
      let task = arrayOfCurrentTask[indexOfTask];
      this.tasksByStatusMap.set(statusOfTask, this.removeElementFromArray(arrayOfCurrentTask, task));

      let currentStatusKey: number = this.getKey(statusOfTask);
      
      if (source === "next") {
        this.moveToNext(currentStatusKey, task);
      } else {
        this.moveToPrevious(currentStatusKey, task);
      }
  }

  moveToNext(currentStatusKey: any, task: any) {
    let nextStatus: string = '';
    if (currentStatusKey > -1) {
      nextStatus = this.statusPriorityMap.get(currentStatusKey + 1) as string;
    }

    let arrayOfNextStatus = this.tasksByStatusMap.get(nextStatus);
    arrayOfNextStatus?.push(task);
    this.tasksByStatusMap.set(nextStatus, arrayOfNextStatus as any[]);
  }

  moveToPrevious(currentStatusKey: any, task: any) {
    let previousStatus: string = '';
    if (currentStatusKey > -1) {
      previousStatus = this.statusPriorityMap.get(currentStatusKey - 1) as string;
    }

    let arrayOfPreviousStatus = this.tasksByStatusMap.get(previousStatus);
    arrayOfPreviousStatus?.push(task);
    this.tasksByStatusMap.set(previousStatus, arrayOfPreviousStatus as any[]);
  }


  getKey(statusOfTask: string): number {
   for (let [key, value] of this.statusPriorityMap.entries() ) {
      if (value === statusOfTask) {
        return key as number;
      }
   }
   return -1;
  }

  removeElementFromArray(array: Array<any>, element: any): Array<any> {
    let index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }

  createTask() {
    this.commonService.navigateByUrl('task/create');
  }

  originalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return 0;
  }

}

