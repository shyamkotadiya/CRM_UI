import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { ClientLead } from 'src/app/common/beanClass';
import { ComponentCommunicationServiceService } from 'src/app/common/component-communication-service.service';
import { ClientLeadService } from '../client-lead.service';
@Component({
  selector: 'app-client-lead-add-edit',
  templateUrl: './client-lead-add-edit.component.html',
  styleUrls: ['./client-lead-add-edit.component.css'],

})
export class ClientLeadAddEditComponent implements OnInit {
  clientForm: FormGroup;
  // lead = new ClientLead();

  countryOptions: Array<any> = [
    { id: '1', value: 'India' },
    { id: '2', value: 'US' }
  ];

  stateOptions: Array<any> = [
    { id: '1', value: 'Gujarat' },
    { id: '2', value: 'Maharashtra' }
  ];

  leadSource: Array<any> = [
    { id: '1', value: 'Reference' },
    { id: '2', value: 'Justdial' },
    { id: '3', value: 'Indiamart' },
    { id: '4', value: 'Telecaller' },
    { id: '5', value: 'Facebook Ad' },
    { id: '6', value: 'Google Ad' },
    { id: '7', value: 'Banner && Printing' },
  ];

  constructor(private fb: FormBuilder,
    private communicationService: ComponentCommunicationServiceService,
    private toster: ToastrService,
    private router: Router,
    private clientLeadService: ClientLeadService
  ) {
    this.clientForm = this.initializeForm();
    this.changeSubmitColor('red');
  }

  initializeForm() {
    return this.fb.group({
      fname: this.fb.control('', Validators.required),
      lname: this.fb.control(''),
      contactNo: this.fb.control('', Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])),
      email: this.fb.control(''),
      state: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      requirements: this.fb.control(''),
      comments: this.fb.control(''),
      leadSource: this.fb.control('', Validators.required),
      nextDate: this.fb.control('')
    });
  }

  ngOnInit(): void {
    this.changeSubmitColor('red');
  }

  onClick(source: string) {
    this.clientForm.getRawValue();
    if (this.clientForm.valid) {
      if (source === 'submit') {
        this.clientLeadService.save(this.clientForm.getRawValue()).subscribe((data) => {
          if (data) {
            this.toster.success("Client Lead Saved Successful", 'Saved');
          }
        });
      } else if (source === 'submitAndNext') {
        this.toster.success("Client Lead Saved Successful", 'Saved');
        this.router.navigateByUrl("clientLead/search");
      }
    }
    if (source === 'cancel') {
      this.clientForm.reset();
    }

  }
  onNgModelChange(event: any) {
    // if (this.clientForm.valid) {
    //   this.changeSubmitColor('green');
    // } else {
    //   this.changeSubmitColor('red');
    // }
  }


  changeSubmitColor(color: string) {
    if (color === 'red') {
      $('.submitButton').removeClass('greenBackground').addClass('redBackground')
        .removeClass('buttonClass').addClass('removeBoxShodaw removePointer');
      $('.submitButton').prop("disabled", true);
    }
    else {
      $('.submitButton').prop("disabled", false);
      // $('.submitButton').removeClass('redBackground removePointer').addClass('greenBackground')
      //   .addClass('buttonClass').removeClass("removeBoxShodaw");
    }
  }

  blurEmitter(event: any) {
    this.communicationService.dataTransferToComponent({ from: "blurEvent", event: event })
  }

}
