import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
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
import { CurrencyProxyPipe } from './pipes/currency-proxy.pipe'
import { ConfigService } from "./service/config.service";
import { ShowRequestComponent } from './components/show-request/show-request.component';
import { IndexComponent } from './components/index/index.component';
import { RequestALoanSimpleComponent } from './components/request-a-loan-simple/request-a-loan-simple.component';
import { RequestALoanMatdesignComponent } from './components/request-a-loan-matdesign/request-a-loan-matdesign.component';
import { MyTitleCasePipe } from './pipes/titlecase.pipe';
import { RequestcommentsComponent } from './components/requestcomments/requestcomments.component';
import { AuthService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    LoantypeSelectionComponent,
    CurrencyProxyPipe,
    MyTitleCasePipe,
    ShowRequestComponent,
    IndexComponent,
    RequestALoanMatdesignComponent,
    RequestALoanSimpleComponent,
    RequestcommentsComponent
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
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    authInterceptorProviders,
    LoanTypesService,
    LoanReasonsService,
    LoanRequestService,
    ConfigService,
    CurrencyProxyPipe,
    AuthService,
    TokenStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
