import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _tokenStorage: TokenStorageService,
    private _authService: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this._tokenStorage.getToken() != null;
  }


  submitLogin() {
    const { username, password } = this.loginForm;

    this._authService.login(username, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data.jwttoken);

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
}
