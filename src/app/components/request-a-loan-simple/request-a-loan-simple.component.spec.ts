import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestALoanSimpleComponent } from './request-a-loan-simple.component';

describe('RequestALoanSimpleComponent', () => {
  let component: RequestALoanSimpleComponent;
  let fixture: ComponentFixture<RequestALoanSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestALoanSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestALoanSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
