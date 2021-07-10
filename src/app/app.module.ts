import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoanTypesService } from './service/loantypes.service';
import { LoanReasonsService } from './service/loanreasons.service';
import { LoanRequestService } from './service/loanrequests.service';
import { RequestListComponent } from './request-list/request-list.component';
import { LoantypeSelectionComponent } from './loantype-selection/loantype-selection.component';
import { RequestLoanComponent } from './request-loan/request-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    LoantypeSelectionComponent,
    RequestLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    LoanTypesService,
    LoanReasonsService,
    LoanRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
