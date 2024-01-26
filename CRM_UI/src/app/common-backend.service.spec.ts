import { TestBed } from '@angular/core/testing';

import { CommonBackendService } from './common-backend.service';

describe('CommonBackendService', () => {
  let service: CommonBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
