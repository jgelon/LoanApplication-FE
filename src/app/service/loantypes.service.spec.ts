import { TestBed } from '@angular/core/testing';

import { LoanTypesService } from './loantypes.service';

describe('LoanTypesService', () => {
  let service: LoantypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
