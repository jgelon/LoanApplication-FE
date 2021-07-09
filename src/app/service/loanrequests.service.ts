import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanRequest } from '../model/loanrequest';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoanRequestService {

  private loansUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = 'https://loanapplication-be.azurewebsites.net/loanrequests/';
  }

  public findAll(): Observable<LoanRequest[]> {
    return this.http.get<LoanRequest[]>(this.loansUrl);
  }

  public save(loanRequest: LoanRequest) {
    return this.http.post<LoanRequest>(this.loansUrl, loanRequest);
  }

}
