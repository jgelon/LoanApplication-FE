import { TestBed } from '@angular/core/testing';

import { LoanReasonsService } from './loanreasons.service';

describe('LoanReasonsService', () => {
  let service: LoanreasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanReasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
