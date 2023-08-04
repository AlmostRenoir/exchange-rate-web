import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsHistoryComponent } from './requests-history.component';

const routes: Routes = [
  { path: '', component: RequestsHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsHistoryRoutingModule { }
