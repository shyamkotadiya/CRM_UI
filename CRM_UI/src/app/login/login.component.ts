import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonBackendService } from '../common-backend.service';
import { ComponentCommunicationServiceService } from '../common/component-communication-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(private router: Router,
    private commonCommunicationService: ComponentCommunicationServiceService,
    private backendService: CommonBackendService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  forgotPass() {

  }

  onClick(source: string) {
    console.log(this.loginForm.getRawValue());
    sessionStorage.setItem("isLogin", "true");
    this.commonCommunicationService.dataTransferToComponent({ "from": "login" })
    this.router.navigateByUrl("/home");
    if (source === 'login' && this.loginForm.valid) {
      let json = {
        userName: this.userName,
        password: this.password
      }
      this.backendService.checkLogin("/login", json).subscribe((response) => {
        // sessionStorage.setItem("isLogin", "true");
        // this.commonCommunicationService.dataTransferToComponent({ "from": "login" })
        // this.router.navigateByUrl("/home");
      });

    }
  }

}
