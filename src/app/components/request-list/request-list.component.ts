import { Component, OnInit } from '@angular/core';
import { LoanRequest } from '../../model/loanrequest';
import { LoanRequestService } from '../../service/loanrequests.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  loanRequests: LoanRequest[];
  displayedColumns: string[] = ['id', 'fullname', 'address', 'type', 'amount'];
  loading = false;

  constructor(
    private _loanRequestService: LoanRequestService
  ) { }

  ngOnInit(): void {
    this._loanRequestService.findAll().subscribe(data => {
      this.loanRequests = data;
    });
  }

  generate() {
    this.loading = true;
    this._loanRequestService.generate().subscribe(data => {
      this.loanRequests = this.loanRequests.concat(data);
      this.loading = false;
    });
  }

}
