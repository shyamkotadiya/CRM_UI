import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.css']
})
export class TaskAddEditComponent implements OnInit, AfterViewInit {
  taskForm: FormGroup;
  statusOption = [
    { id: 'pending', value: 'Pending' },
    { id: 'open', value: 'Open' },
    { id: 'inProgress', value: 'In-Progress' },
    { id: 'complete', value: 'Complete' }
  ];

  priorityOption = [
    { id: 1, value: 'Low' },
    { id: 5, value: 'Medium' },
    { id: 10, value: 'High' }
  ];

  assignToOption = [
    { id: 1, value: 'Low' },
    { id: 5, value: 'Medium' },
    { id: 10, value: 'High' }
  ];
  constructor(private fb: FormBuilder) {
    this.taskForm = this.initializeForm() as FormGroup;
   }
  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.setDefaultValue();
  }
  
  setDefaultValue(): void {
    this.taskForm.get('status')?.setValue('pending');
    this.taskForm.get('priority')?.setValue(1);  
  }

  initializeForm() {
    return this.fb.group({
      project: this.fb.control('', Validators.required),
      title: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      priority: this.fb.control('', Validators.required),
      description: this.fb.control('')
    });
  }

  onNgModelChange(event: any) {
    console.log(this.taskForm.getRawValue());
  }

  onClick(source: string): void{

  }

}
