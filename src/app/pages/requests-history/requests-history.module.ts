import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsHistoryRoutingModule } from './requests-history-routing.module';
import { RequestsHistoryComponent } from './requests-history.component';


@NgModule({
  declarations: [
    RequestsHistoryComponent
  ],
  imports: [
    CommonModule,
    RequestsHistoryRoutingModule
  ]
})
export class RequestsHistoryModule { }
