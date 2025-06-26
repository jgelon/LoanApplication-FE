import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';
import { environment } from 'src/environments/environment';
import GravityCollector from '@smartesting/gravity-data-collector/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loan Application';
  isLoggedIn = false;
  apiUrl: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.apiUrl = environment.api;

    GravityCollector.init({
      authKey: environment.gravityAuthKey
    })
  }

  clearStorage() {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
