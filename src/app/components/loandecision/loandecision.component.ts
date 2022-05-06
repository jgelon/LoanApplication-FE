import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanRequestService } from 'src/app/service/loanrequests.service';
import { AuthorityArea, AuthorityLevel } from 'src/app/constants/authority';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-loandecision',
  templateUrl: './loandecision.component.html',
  styleUrls: ['./loandecision.component.css']
})
export class LoandecisionComponent implements OnInit {

  @Input() decision = '';

  loanId: number;
  authorizedWrite = false;

  constructor(
    private _loanrequestService: LoanRequestService,
    private _route: ActivatedRoute,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this.loanId = Number(this._route.snapshot.paramMap.get('id'));
    this.authorizedWrite = this._authService.hasAccess(AuthorityArea.REQUEST, AuthorityLevel.WRITE);
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
