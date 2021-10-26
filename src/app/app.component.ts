import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Application';

  clearStorage() {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
