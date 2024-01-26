import { Injectable } from '@angular/core';
import { DelegatorService } from './delegator.service';

@Injectable({
  providedIn: 'root'
})
export class CommonBackendService {

  
  constructor(private delegatorService: DelegatorService,
  ) { }

  checkLogin(url: string, json: any) {
    return this.delegatorService.post(url, json);

  }
}
