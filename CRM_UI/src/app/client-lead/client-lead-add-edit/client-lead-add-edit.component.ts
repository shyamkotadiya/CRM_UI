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


  /* @ViewChild('clientForm') */ 
  clientForm: FormGroup;
  // clientForm!: FormGroup<{
  //   fname: FormControl<string>;
  //   lname: FormControl<string>;
  //   contactNo: FormControl<number>;
  //   email: FormControl<string>;
  //   state: FormControl<string>;
  //   country: FormControl<string>;
  //   city: FormControl<number>;
  //   requirements: FormControl<string>;
  //   comments: FormControl<number>;
  //   leadSource: FormControl<string>;
  // }>;
  // fname = new FormControl();
  // fname= this.fb.control('', Validators.required);
  lead = new ClientLead();
  notNullValidator = {
    type: "text",
    operator: 'notNull'
  };

  numberLimit10 = {
    type: 'number',
    limit: 10
  };

  countryOptions: Array<any> = [
    { id: '1', value: 'India' },
    { id: '2', value: 'US' }
  ];

  stateOptions: Array<any> = [
    { id: '1', value: 'Gujrat' },
    { id: '2', value: 'Maharastra' }
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
    this.clientForm = this.initializeForm() as FormGroup;
    this.changeSubmitColor('red');
  }

  initializeForm() {
   /*   return this.fb.group({
      fname: new FormControl(''),//['', Validators.required],
      lname: [''],
      contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: [''],
      state: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      requirements: [''],
      comments: [''],
      leadSource: ['', Validators.required]
    }); */

    // this.clientForm.get
    return this.fb.group({
      fname: this.fb.control('', Validators.required),
      lname: this.fb.control('', Validators.required),
      contactNo: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      state: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      requirements: this.fb.control('', Validators.required),
      comments: this.fb.control('', Validators.required),
      leadSource: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onClick(source: string) {
    this.clientForm.getRawValue();
    if (this.clientForm.valid) {
      console.log(this.lead);
      if (source === 'submit') {
        this.clientLeadService.save(this.lead).subscribe( (data) => {
          if (data) {
            this.toster.success("Client Lead Saved Successfull", 'Saved');
           }
        });
      } else if (source === 'submitAndNext') {
        this.toster.success("Client Lead Saved Successfull", 'Saved');
        this.router.navigateByUrl("clientLead/search")
      }
    }
    if (source === 'cancle') {
      this.clientForm.reset();
      this.lead = _.cloneDeep(new ClientLead());
      this.lead.fname = ''
    }

  }
  ngModelChange() {
    if (this.clientForm.valid) {
      this.changeSubmitColor('green');
    } else {
      this.changeSubmitColor('red');
    }
  }


  changeSubmitColor(color: string) {
    if (color === 'red') {
      $('.submitButton').removeClass('greenBackground').addClass('redBackground')
        .removeClass('buttonClass').addClass('removeBoxShodaw removePointer');
      $('.submitButton').prop("disabled", true);
    }
    else {
      $('.submitButton').prop("disabled", false);
      $('.submitButton').removeClass('redBackground removePointer').addClass('greenBackground')
        .addClass('buttonClass').removeClass("removeBoxShodaw");
    }
  }

  blurEmitter(event: any) {
    console.log(event);
    this.communicationService.dataTransferToComponent({ from: "blurEvent", event: event })
  }

}
