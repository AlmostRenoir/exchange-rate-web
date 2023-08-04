import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyFetchComponent } from './currency-fetch.component';

const routes: Routes = [
  { path: '', component: CurrencyFetchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyFetchRoutingModule { }
