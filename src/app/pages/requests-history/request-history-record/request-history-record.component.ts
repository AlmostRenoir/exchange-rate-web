import { Component, Input } from '@angular/core';
import { CurrencyRequest } from 'src/app/models/currency-request/currency-request.model';

@Component({
  selector: 'app-request-history-record',
  templateUrl: './request-history-record.component.html',
  styleUrls: ['./request-history-record.component.scss']
})
export class RequestHistoryRecordComponent {

  @Input({ required: true }) request!: CurrencyRequest;

}
