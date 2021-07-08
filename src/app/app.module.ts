import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanService } from './service/loan.service';
import { LoanReasonsService } from './service/loanreasons.service';


@NgModule({
  declarations: [
    AppComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoanService,
    LoanReasonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
