import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.css']
})
export class CommonGridComponent implements OnInit {

  @Input() grid:Array<any>=[{}];

  constructor() { }

  ngOnInit(): void {
  }

}
