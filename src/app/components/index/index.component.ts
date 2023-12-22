import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  genders: string[];
  backendIsUp: boolean;

  constructor(
    private _configService: ConfigService
  ) {}

  ngOnInit() {
    this._configService.genders().subscribe(data => {
      this.genders = data;
      this.backendIsUp = true;
    });
  }
}
