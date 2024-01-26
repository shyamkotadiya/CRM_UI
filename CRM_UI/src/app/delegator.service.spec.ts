import { TestBed } from '@angular/core/testing';

import { DelegatorService } from './delegator.service';

describe('DelegatorService', () => {
  let service: DelegatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
