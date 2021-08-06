import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestALoanMatdesignComponent } from './request-a-loan-matdesign.component';

describe('RequestALoanMatdesignComponent', () => {
  let component: RequestALoanMatdesignComponent;
  let fixture: ComponentFixture<RequestALoanMatdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestALoanMatdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestALoanMatdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
