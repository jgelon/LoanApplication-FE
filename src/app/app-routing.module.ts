import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestALoanComponent } from './components/request-a-loan/request-a-loan.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import {ShowRequestComponent} from "./components/show-request/show-request.component";

const routes: Routes = [
  { path: 'request', component: RequestALoanComponent },
  { path: 'request/:id', component: ShowRequestComponent },
  { path: 'list', component: RequestListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
