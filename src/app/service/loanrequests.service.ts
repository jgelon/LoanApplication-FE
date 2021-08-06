import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoanRequest } from '../model/loanrequest';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../constants/constants';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewLoanRequest } from '../model/newloanrequest';

@Injectable()
export class LoanRequestService {

  private loansUrl: string;
  private loansNewUrl: string;
  private loansGenerateUrl: string;
  private loansIdUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = BASE_URL + '/loanrequests/';
    this.loansIdUrl = BASE_URL + '/loanrequests/id/';
    this.loansNewUrl = BASE_URL + '/loanrequests/new';
    this.loansGenerateUrl = BASE_URL + '/loanrequests/generate';
  }

  public findAll(): Observable<LoanRequest[]> {
    return this.http.get<LoanRequest[]>(this.loansUrl);
  }

  public getRequest(id: any) {
    return this.http.get<LoanRequest>(this.loansIdUrl + id);
  }

  public generate(): Observable<LoanRequest[]> {
    return this.http.get<LoanRequest[]>(this.loansGenerateUrl);
  }

  public newRequest(loanRequest: NewLoanRequest) {
    return this.http.post<NewLoanRequest>(this.loansNewUrl, loanRequest).pipe(
              catchError(this.handleError)
            );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
