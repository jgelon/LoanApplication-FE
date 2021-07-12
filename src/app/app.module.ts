import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanTypesService } from './service/loantypes.service';
import { LoanReasonsService } from './service/loanreasons.service';
import { LoanRequestService } from './service/loanrequests.service';
import { RequestListComponent } from './components/request-list/request-list.component';
import { LoantypeSelectionComponent } from './components/loantype-selection/loantype-selection.component';
import { RequestALoanComponent } from './components/request-a-loan/request-a-loan.component';
import { CurrencyProxyPipe } from './pipes/currency-proxy.pipe'
import { ConfigService } from "./service/config.service";
import { ShowRequestComponent } from './components/show-request/show-request.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    LoantypeSelectionComponent,
    RequestALoanComponent,
    CurrencyProxyPipe,
    ShowRequestComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSlideToggleModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoanTypesService,
    LoanReasonsService,
    LoanRequestService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
