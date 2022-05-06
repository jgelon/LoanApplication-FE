import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jwt } from 'src/app/model/jwt';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  loginForm: any = {
    username: null,
    password: null
  };
  loginError= "";
  username: string;
  authorities: string[];
  hide_authorities = true;

  constructor(
    private _tokenStorage: TokenStorageService,
    private _authService: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this._tokenStorage.getToken() != null;

    if(this.isLoggedIn) {
      var jwt = this._tokenStorage.getJwt();
      this.username = jwt.username;
      this.authorities = jwt.authorities;
    }
  }


  submitLogin() {
    const { username, password } = this.loginForm;

    this._authService.login(username, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data);

        this.isLoggedIn = true;
        this.loginError = "";
        this._router.navigate(['list']);
      },
      _err => {
        this.loginError = "Failed to login";
      });
  }

  logout() {
    this._tokenStorage.signOut();
    this.isLoggedIn = false;
    this._router.navigate(['login']);
  }

  toggleAuthorities() {
    this.hide_authorities = !this.hide_authorities;
  }
}
