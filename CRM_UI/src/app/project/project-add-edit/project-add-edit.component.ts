import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-add-edit',
  templateUrl: './project-add-edit.component.html',
  styleUrls: ['./project-add-edit.component.css']
})
export class ProjectAddEditComponent implements OnInit {
  projectForm: FormGroup;
  projectId: number = 0;
  constructor(private fb: FormBuilder,
    private toster: ToastrService,
    private activeRouter: ActivatedRoute,
  ) {
    this.projectForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.projectId = Number(this.activeRouter.snapshot.paramMap.get('id')) || 0;
    if (this.projectId) {
      // api call if projectId exist
      let response = {
        id: 1,
        clientName: "Shyam",
        projectTitle: "Oracle",
        startDate: "05/01/2023",
        projectDescription: "Google Ad",
      }
      this.projectForm = this.buildProjectForm(response);
    }

  }

  initializeForm(): FormGroup {
    return this.fb.group({
      clientName: this.fb.control('', Validators.required),
      projectTitle: this.fb.control('', Validators.required),
      startDate: this.fb.control(''),
      projectDescription: this.fb.control(''),
    })
  }

  onClick(source: string) {
    if (source === 'cancel') {
      this.projectForm.reset();
    }

    if (source === 'submit' && this.projectForm.valid) {
      // this.clientLeadService.save(this.clientForm.getRawValue()).subscribe((data) => {
      console.log(this.projectForm.getRawValue());
      this.toster.success("Client Lead Saved Successful", 'Saved');
      // });
    }
  }

  buildProjectForm(response: any) {
    return this.fb.group({
      id: this.projectId,
      clientName: this.fb.control(response.clientName, Validators.required),
      projectTitle: this.fb.control(response.projectTitle, Validators.required),
      startDate: this.fb.control(response.startDate),
      projectDescription: this.fb.control(response.projectDescription),
    })
  }

}
