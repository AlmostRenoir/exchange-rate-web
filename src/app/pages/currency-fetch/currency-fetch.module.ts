import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { CurrencyFetchRoutingModule } from './currency-fetch-routing.module';
import { CurrencyFetchComponent } from './currency-fetch.component';
import { FetchFormComponent } from './fetch-form/fetch-form.component';


@NgModule({
  declarations: [
    CurrencyFetchComponent,
    FetchFormComponent
  ],
  imports: [
    CommonModule,
    CurrencyFetchRoutingModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class CurrencyFetchModule { }
