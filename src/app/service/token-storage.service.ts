import { Injectable } from '@angular/core';
import { Jwt } from '../model/jwt';

const TOKEN_KEY = 'auth-token';
const USERDATA_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(jwt: Jwt): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, jwt.token);
    window.sessionStorage.removeItem(USERDATA_KEY);
    window.sessionStorage.setItem(USERDATA_KEY, JSON.stringify(jwt));
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getJwt(): Jwt | null {
    return JSON.parse(window.sessionStorage.getItem(USERDATA_KEY));
  }
}
