import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLeadSearchComponent } from './client-lead-search.component';

describe('ClientLeadSearchComponent', () => {
  let component: ClientLeadSearchComponent;
  let fixture: ComponentFixture<ClientLeadSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLeadSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLeadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
