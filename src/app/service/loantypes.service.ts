import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanType } from '../model/loantype';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoanTypesService {

  private loansUrl: string;

  constructor(private http: HttpClient) {
    this.loansUrl = environment.api + '/loantypes/';
  }

  public findAll(): Observable<LoanType[]> {
    return this.http.get<LoanType[]>(this.loansUrl);
  }

  public save(loantype: LoanType) {
    return this.http.post<LoanType>(this.loansUrl, loantype);
  }

}
