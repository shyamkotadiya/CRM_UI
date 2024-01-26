import { TestBed } from '@angular/core/testing';

import { ClientLeadService } from './client-lead.service';

describe('ClientLeadService', () => {
  let service: ClientLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
