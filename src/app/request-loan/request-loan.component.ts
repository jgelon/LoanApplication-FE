import { Component, OnInit } from '@angular/core';
import { LoanType } from '../model/loantype';
import { LoanRequest } from '../model/loanrequest';
import { LoanTypesService } from '../service/loantypes.service';

@Component({
  selector: 'app-request-loan',
  templateUrl: './request-loan.component.html',
  styleUrls: ['./request-loan.component.css']
})
export class RequestLoanComponent implements OnInit {

  loanTypes: LoanType[];
  model = new LoanRequest();
  submitted = false;

  constructor(private loanTypesService: LoanTypesService) { }

  ngOnInit(): void {
     this.loanTypesService.findAll().subscribe(data => {
       this.loanTypes = data;
       this.model.loanType = this.loanTypes[0];
     });
  }

  onSubmit() { this.submitted = true; }

  newLoanRequest() {
    this.model = new LoanRequest();
  }

}
