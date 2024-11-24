import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientLead } from '../../common/beanClass';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-lead-search',
  templateUrl: './client-lead-search.component.html',
  styleUrls: ['./client-lead-search.component.css']
})
export class ClientLeadSearchComponent implements OnInit {

  grid: Array<any> = [{}];
  gridResponse: Array<any> = [{}];
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

  quickSearch = new FormControl('');
  clientSearchForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.clientSearchForm = this.initializeForm();
  }
  initializeForm() {
    return this.fb.group({
      fname: this.fb.control(''),
      contactNo: this.fb.control(''),
      city: this.fb.control(''),
      leadSource: this.fb.control(''),
      nextDate: this.fb.control('')
    });
  }

  ngOnInit(): void {


    this.gridResponse = [
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

    this.grid = this.gridResponse;
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
      this.router.navigateByUrl("clientLead/search");
    } else if (source === 'delete') {

    } else if ('blackCriteriaClick') {
      this.hideBlankSearchCriteria('hide');
      $('.searchCriteria').show();
      setTimeout(() => {
        $('.searchCriteria').removeClass('criteriaSectionOnClose').addClass('criteriaSection');
      }, 0);
    }
  }

  onModelChange(event: any) {
    this.searchByQuickSearch(event);
  }

  searchByQuickSearch(event: any) {
    if (event) {
      let searchStr = event.toLowerCase()
      this.grid = [];
      this.gridResponse.forEach((data: any) => {
        if (data.firstName.toLowerCase().includes(searchStr) || data.lastName.toLowerCase().includes(searchStr)
          || data.contactNumber.toLowerCase().includes(searchStr) || data.city.toLowerCase().includes(searchStr)
          || data.leadSource.toLowerCase().includes(searchStr) || data.nextDate.toLowerCase().includes(searchStr)
          || data.requirements.toLowerCase().includes(searchStr)) {
          this.grid.push(data);
        }
      })
    } else {
      this.grid = this.gridResponse;
    }
  }

  onCloseSection() {
    $('.searchCriteria').hide();
    $('.searchCriteria').removeClass('criteriaSection').addClass('criteriaSectionOnClose');
    this.hideBlankSearchCriteria('show');

  }

}
