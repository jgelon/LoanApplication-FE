import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestALoanMatdesignComponent } from './components/request-a-loan-matdesign/request-a-loan-matdesign.component';
import { RequestALoanSimpleComponent } from './components/request-a-loan-simple/request-a-loan-simple.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import {ShowRequestComponent} from "./components/show-request/show-request.component";
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'request', component: RequestALoanSimpleComponent },
  { path: 'request-fancy', component: RequestALoanMatdesignComponent },
  { path: 'request/:id', component: ShowRequestComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: RequestListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
