import { TestBed } from '@angular/core/testing';

import { LoanRequestService } from './loanrequests.service';

describe('LoanRequestService', () => {
  let service: LoanrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
