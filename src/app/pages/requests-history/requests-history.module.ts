import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsHistoryRoutingModule } from './requests-history-routing.module';
import { RequestsHistoryComponent } from './requests-history.component';
import { RequestHistoryRecordComponent } from './request-history-record/request-history-record.component';


@NgModule({
  declarations: [
    RequestsHistoryComponent,
    RequestHistoryRecordComponent
  ],
  imports: [
    CommonModule,
    RequestsHistoryRoutingModule
  ]
})
export class RequestsHistoryModule { }
