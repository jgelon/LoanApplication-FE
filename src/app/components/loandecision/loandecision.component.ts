import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanRequestService } from 'src/app/service/loanrequests.service';

@Component({
  selector: 'app-loandecision',
  templateUrl: './loandecision.component.html',
  styleUrls: ['./loandecision.component.css']
})
export class LoandecisionComponent implements OnInit {

  @Input() decision = '';

  loanId: number;

  constructor(
    private _loanrequestService: LoanRequestService,
    private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loanId = Number(this._route.snapshot.paramMap.get('id'));
  }

  approve() {
    this._loanrequestService.approve(this.loanId).subscribe(data => {
      this.decision = data.decision;
    });
  }

  decline() {
    this._loanrequestService.decline(this.loanId).subscribe(data => {
      this.decision = data.decision;
    });
  }
}
