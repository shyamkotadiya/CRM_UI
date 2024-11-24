import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add-edit',
  templateUrl: './client-add-edit.component.html',
  styleUrls: ['./client-add-edit.component.css']
})
export class ClientAddEditComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder,) {
    this.clientForm = this.initClientForm();
   }

   initClientForm() {
    return this.fb.group({
      clientName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required, ),
      contactNo: this.fb.control('', Validators.compose([Validators.required,
         Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]))
    }) 
   }

  ngOnInit(): void {

  }

  onClick(source: any) {
    if (source === "save") {

    } else {

    }
  }

}
