import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan';
import { LoanReason } from '../model/loanreason';
import { LoanService } from '../service/loan.service';
import { LoanReasonsService } from '../service/loanreasons.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans: Loan[];
  loanReasons: LoanReason[];

  constructor(private loanService: LoanService, private loanReasonsService: LoanReasonsService) {
  }

    ngOnInit() {
      this.loanService.findAll().subscribe(data => {
        this.loans = data;
      });

      this.loanReasonsService.findAll().subscribe(data => {
        this.loanReasons = data;
      });
    }

}
