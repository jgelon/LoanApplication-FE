import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorityArea, AuthorityLevel } from '../constants/authority';
import { Jwt } from '../model/jwt';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _tokenStorage: TokenStorageService
  ) { }

  login(username: string, password: string): Observable<Jwt> {
    return this._http.post<Jwt>(environment.api + '/auth/login', {
      username,
      password
    }, httpOptions);
  }

  hasAccess(area: AuthorityArea, level: AuthorityLevel): boolean {
    var authority = `${area}_${level}`;
    console.log(authority in this._tokenStorage.getJwt().authorities);
    return this._tokenStorage.getJwt().authorities.includes(authority);
  }
}
