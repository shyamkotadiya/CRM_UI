import { Injectable } from '@angular/core';
import { DelegatorService } from '../delegator.service';

@Injectable({
  providedIn: 'root'
})
export class ClientLeadService {

  constructor(private delegatorService: DelegatorService) { }

  save(clientLead: any) {
    return this.delegatorService.post('/clientLead/', clientLead);
  }
}
