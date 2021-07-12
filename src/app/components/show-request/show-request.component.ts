import {Component, Input, OnInit} from '@angular/core';
import {LoanRequestService} from "../../service/loanrequests.service";
import {LoanRequest} from "../../model/loanrequest";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  loanRequest$: Observable<LoanRequest>;

  constructor(
    private _loanRequestsService: LoanRequestService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loanRequest$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._loanRequestsService.getRequest(params.get('id')!))
    );
  }

}
