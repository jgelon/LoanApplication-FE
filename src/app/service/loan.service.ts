import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loan } from '../model/loan';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoanService {

  private loansUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = 'http://localhost:8080/loans/';
  }

  public findAll(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.loansUrl);
  }

  public save(loan: Loan) {
    return this.http.post<Loan>(this.loansUrl, loan);
  }

}
