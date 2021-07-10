import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestALoanComponent } from './request-a-loan.component';

describe('RequestALoanComponent', () => {
  let component: RequestALoanComponent;
  let fixture: ComponentFixture<RequestALoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestALoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestALoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
