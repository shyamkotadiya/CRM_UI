import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientLead } from '../../common/beanClass';

@Component({
  selector: 'app-client-lead-search',
  templateUrl: './client-lead-search.component.html',
  styleUrls: ['./client-lead-search.component.css']
})
export class ClientLeadSearchComponent implements OnInit {

  grid: Array<any> = [{}];
  lead = new ClientLead();
  leadSource: Array<any> = [
    { id: 1, value: 'Reference' },
    { id: 2, value: 'Justdial' },
    { id: 3, value: 'Indiamart' },
    { id: 4, value: 'Telecaller' },
    { id: 5, value: 'Facebook Ad' },
    { id: 6, value: 'Google Ad' },
    { id: 7, value: 'Banner && Printing' },
  ];

  quickSearch = ''
  constructor(/* private keyValue:KeyValuePipe */) { }

  ngOnInit(): void {


    this.grid = [
      {
        id: 1,
        firstName: "Shyam",
        lastName: "Kotadiya",
        contactNumber: "815544766",
        city: "Amarnagar State",
        nextDate: "05/01/2023",
        leadSource: "Google Ad",
        requirements: "Whats app only",
      },
      {
        id: 2,
        firstName: "Virat",
        lastName: "Savaliya",
        leadSource: "Indiamart",
        contactNumber: "815447766",
        nextDate: "02/01/2023",
        city: "Thanagalol",
        requirements: "No Call Only Text message"
      },
      {
        id: 3,
        firstName: "Brijesh",
        lastName: "Vaghasiya",
        contactNumber: "84631254766",
        city: "Tori Rampar",
        nextDate: "01/01/2022",
        leadSource: "Facebook Ad",
        requirements: "Call Before 12"
      },
      {
        id: 4,
        firstName: "Rahul",
        lastName: "Upadhyay",
        contactNumber: "819635766",
        leadSource: "Telecaller",
        nextDate: "12/12/2022",
        city: "Khabar Nai",
        requirements: "Call After 5"
      },
      {
        id: 5,
        firstName: "Kuldeep",
        lastName: "Laghnoja",
        contactNumber: "756344766",
        city: "Nathi Kevu",
        leadSource: "Reference",
        nextDate: "12/01/2022",
        requirements: "No req"
      },
    ];

    // this.hideBlankSearchCriteria('hide');
    this.onCloseSection();


  }
  hideBlankSearchCriteria(mode: string) {
    if (mode === "hide") {
      $('.searchBlankCriteria').hide();
      $('.searchBlankCriteria').removeClass('criteriaSectionOnClose').addClass('criteriaSection');

    } else {
      $('.searchBlankCriteria').show();
      $('.searchBlankCriteria').removeClass('criteriaSection').addClass('criteriaSectionOnClose');

    }


  }

  onActionClick(source: string) {
    if (source === 'edit') {

    } else if (source === 'delete') {

    } else if ('blackCriteriaClick') {
      this.hideBlankSearchCriteria('hide');
      $('.searchCriteria').show();
      setTimeout(() => {
        $('.searchCriteria').removeClass('criteriaSectionOnClose').addClass('criteriaSection');
      }, 0);
    }
  }

  ngModelChange() {

  }

  onCloseSection() {
    $('.searchCriteria').hide();
    $('.searchCriteria').removeClass('criteriaSection').addClass('criteriaSectionOnClose');
    this.hideBlankSearchCriteria('show');

  }

}
