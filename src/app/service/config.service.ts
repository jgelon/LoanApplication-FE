import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../constants/constants';

@Injectable()
export class ConfigService {

  private maritalStatusUrl: string;
  private gendersUrl: string;
  private incomeTypesUrl: string;

  constructor(private http: HttpClient) {
    this.maritalStatusUrl = BASE_URL + '/config/maritalstatus';
    this.gendersUrl = BASE_URL + '/config/genders';
    this.incomeTypesUrl = BASE_URL + '/config/incometypes';
  }

  public maritalstatus(): Observable<string[]> {
    return this.http.get<string[]>(this.maritalStatusUrl);
  }

  public genders(): Observable<string[]> {
    return this.http.get<string[]>(this.gendersUrl);
  }

  public incomeTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.incomeTypesUrl);
  }
}
