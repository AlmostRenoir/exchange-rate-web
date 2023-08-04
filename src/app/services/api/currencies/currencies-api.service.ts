import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CurrencyFetchResult } from 'src/app/models/currency-fetch/currency-fetch-result.model';
import { CurrencyFetchFormData } from 'src/app/models/currency-fetch/currency-fetch-form-data.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesApiService {

  private static readonly CURRENCIES_URL = `${process.env['SERVER_URL']}/currencies`;

  constructor(private readonly httpClient: HttpClient) { }

  fetchCurrency(currencyFetchFormData: CurrencyFetchFormData): Observable<CurrencyFetchResult> {
    return this.httpClient.post<CurrencyFetchResult>(
      `${CurrenciesApiService.CURRENCIES_URL}/get-current-currency-value-command`,
      currencyFetchFormData
    );
  }

}
