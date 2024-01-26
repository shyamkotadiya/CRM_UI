import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonElementComponent } from './common-element.component';

describe('CommonElementComponent', () => {
  let component: CommonElementComponent;
  let fixture: ComponentFixture<CommonElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
