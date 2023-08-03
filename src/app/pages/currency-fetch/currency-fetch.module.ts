import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyFetchRoutingModule } from './currency-fetch-routing.module';
import { CurrencyFetchComponent } from './currency-fetch.component';


@NgModule({
  declarations: [
    CurrencyFetchComponent
  ],
  imports: [
    CommonModule,
    CurrencyFetchRoutingModule
  ]
})
export class CurrencyFetchModule { }
