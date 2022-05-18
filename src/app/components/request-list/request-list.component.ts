import { Component, OnInit } from '@angular/core';
import { AuthorityArea, AuthorityLevel } from 'src/app/constants/authority';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { LoanRequest } from '../../model/loanrequest';
import { LoanRequestService } from '../../service/loanrequests.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  loanRequests: LoanRequest[];
  displayedColumns: string[] = ['id', 'fullname', 'address', 'type', 'amount', 'decision'];
  loading = false;
  isSuperAdmin = false;

  constructor(
    private _loanRequestService: LoanRequestService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._loanRequestService.findAll().subscribe(data => {
      this.loanRequests = data;
    });
    this.isSuperAdmin = this._authService.hasAccess(AuthorityArea.REQUEST, AuthorityLevel.DELETE_ALL);
  }

  generate() {
    this.loading = true;
    this._loanRequestService.generate().subscribe(data => {
      this.loanRequests = this.loanRequests.concat(data);
      this.loading = false;
    });
  }

  deleteAll() {
    this.loading = true;
    this._loanRequestService.deleteAll().subscribe(
      () => {
        this.loanRequests = [];
        this.loading = false;
      }
    );
  }

}
