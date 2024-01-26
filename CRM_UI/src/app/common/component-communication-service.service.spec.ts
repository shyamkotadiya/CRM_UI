import { TestBed } from '@angular/core/testing';

import { ComponentCommunicationServiceService } from './component-communication-service.service';

describe('ComponentCommunicationServiceService', () => {
  let service: ComponentCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
