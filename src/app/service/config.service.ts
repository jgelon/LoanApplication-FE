import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {

  private maritalStatusUrl: string;
  private gendersUrl: string;
  private incomeTypesUrl: string;

  constructor(private http: HttpClient) {
    this.maritalStatusUrl = environment.api + '/config/maritalstatus';
    this.gendersUrl = environment.api + '/config/genders';
    this.incomeTypesUrl = environment.api + '/config/incometypes';
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
