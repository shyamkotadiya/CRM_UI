import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommunicationDashboardComponent } from './client-communication-dashboard.component';

describe('ClientCommunicationDashboardComponent', () => {
  let component: ClientCommunicationDashboardComponent;
  let fixture: ComponentFixture<ClientCommunicationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCommunicationDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCommunicationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
