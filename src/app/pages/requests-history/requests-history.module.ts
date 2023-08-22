import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { AlertModule } from 'ngx-bootstrap/alert';

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
    RequestsHistoryRoutingModule,
    PaginationModule,
    AlertModule
  ]
})
export class RequestsHistoryModule { }
