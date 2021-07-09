import { Component, OnInit } from '@angular/core';
import { LoanRequest } from '../model/loanrequest';
import { LoanRequestService } from '../service/loanrequests.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  loanRequests: LoanRequest[];

  constructor(private loanRequestService: LoanRequestService) { }

  ngOnInit(): void {
      this.loanRequestService.findAll().subscribe(data => {
        this.loanRequests = data;
      });
  }

}
