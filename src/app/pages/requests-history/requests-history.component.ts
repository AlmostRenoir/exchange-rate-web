import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRequest } from 'src/app/models/currency-request/currency-request.model';
import { CurrenciesApiService } from 'src/app/services/api/currencies/currencies-api.service';

@Component({
  selector: 'app-requests-history',
  templateUrl: './requests-history.component.html',
  styleUrls: ['./requests-history.component.scss']
})
export class RequestsHistoryComponent {

  requests$: Observable<ReadonlyArray<CurrencyRequest>>;

  constructor(currenciesApiService: CurrenciesApiService) {
    this.requests$ = currenciesApiService.getRequests();
  }

  trackByRequestId(index: number, request: CurrencyRequest): string {
    return request.id;
  }

}
