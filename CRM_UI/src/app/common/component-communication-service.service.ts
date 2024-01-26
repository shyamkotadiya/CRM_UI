import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationServiceService {
  private setLoginEnableSubject = new BehaviorSubject<any>({});
  setLoginEnableObs = this.setLoginEnableSubject.asObservable();

  private dataTransferToCompoenentSubject = new BehaviorSubject<any>({});
  dataTransferToCompoenentObservable = this.dataTransferToCompoenentSubject.asObservable();

  constructor(private router:Router) { }

  setLoginEnable(){
    let json = {
      from:"login",
      "isLogin":true
    }
    this.setLoginEnableSubject.next(json);
  }

  navigateToCreateClientLead(){
    this.router.navigateByUrl('/clientLead/create');
  }

  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }

  dataTransferToComponent(json:any){
    this.dataTransferToCompoenentSubject.next(json);
  }
}
