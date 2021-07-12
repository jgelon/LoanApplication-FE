import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestALoanComponent } from './components/request-a-loan/request-a-loan.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import {ShowRequestComponent} from "./components/show-request/show-request.component";
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'request', component: RequestALoanComponent },
  { path: 'request/:id', component: ShowRequestComponent },
  { path: 'list', component: RequestListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
