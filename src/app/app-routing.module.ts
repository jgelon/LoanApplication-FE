import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: 'request', component: RequestLoanComponent },
  { path: 'list', component: RequestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
