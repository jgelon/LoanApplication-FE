import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanReason } from '../model/loanreason';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoanReasonsService {

  private loansUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = 'https://loanapplication-be.azurewebsites.net/loanreasons/';
  }

  public findAll(): Observable<LoanReason[]> {
    return this.http.get<LoanReason[]>(this.loansUrl);
  }

  public save(loanreason: LoanReason) {
    return this.http.post<LoanReason>(this.loansUrl, loanreason);
  }
}
