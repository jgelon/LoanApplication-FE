import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoantypeSelectionComponent } from './loantype-selection/loantype-selection.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: 'request', component: LoantypeSelectionComponent },
  { path: 'list', component: RequestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
