import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { CurrencyFetchFormData } from 'src/app/models/currency-fetch/currency-fetch-form-data.model';
import { CurrencyFetchResult } from 'src/app/models/currency-fetch/currency-fetch-result.model';
import { CurrenciesApiService } from 'src/app/services/api/currencies/currencies-api.service';

@Component({
  selector: 'app-currency-fetch',
  templateUrl: './currency-fetch.component.html',
  styleUrls: ['./currency-fetch.component.scss']
})
export class CurrencyFetchComponent {

  FetchStatus = FetchStatus;
  fetchStatus = FetchStatus.None;
  fetchResult: CurrencyFetchResult | null = null;
  fetchedCurrency: string = '';

  constructor(private readonly currenciesApiService: CurrenciesApiService) {}

  onFetch(currencyFetchFormData: CurrencyFetchFormData): void {
    this.fetchStatus = FetchStatus.Loading;
    this.fetchedCurrency = currencyFetchFormData.currency;
    this.currenciesApiService.fetchCurrency(currencyFetchFormData)
      .subscribe({
        next: this.onFetchSuccess.bind(this),
        error: this.onFetchError.bind(this)
      });
  }

  private onFetchSuccess(result: CurrencyFetchResult): void {
    this.fetchResult = result;
    this.fetchStatus = FetchStatus.Success;
  }

  private onFetchError(error: HttpErrorResponse): void {
    this.fetchResult = null;
    if (error.status == 404) this.fetchStatus = FetchStatus.NoValueForGivenCurrency;
    if (error.status >= 500) this.fetchStatus = FetchStatus.ServiceNotAvailable;
  }
  
}

enum FetchStatus {
  Loading,
  NoValueForGivenCurrency,
  ServiceNotAvailable,
  Success,
  None
}
