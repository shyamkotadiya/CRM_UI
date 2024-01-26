import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLeadAddEditComponent } from './client-lead-add-edit.component';

describe('ClientLeadAddEditComponent', () => {
  let component: ClientLeadAddEditComponent;
  let fixture: ComponentFixture<ClientLeadAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLeadAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLeadAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
