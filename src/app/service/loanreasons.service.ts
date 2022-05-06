import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanReason } from '../model/loanreason';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoanReasonsService {

  private loansUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = environment.api + '/loanreasons/';
  }

  public findAll(): Observable<LoanReason[]> {
    return this.http.get<LoanReason[]>(this.loansUrl);
  }

  public save(loanreason: LoanReason) {
    return this.http.post<LoanReason>(this.loansUrl, loanreason);
  }
}
