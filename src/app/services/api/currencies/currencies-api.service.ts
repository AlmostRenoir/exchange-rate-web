import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CurrencyFetchResult } from 'src/app/models/currency-fetch/currency-fetch-result.model';
import { CurrencyFetchFormData } from 'src/app/models/currency-fetch/currency-fetch-form-data.model';
import { CurrencyRequest } from 'src/app/models/currency-request/currency-request.model';
import { PaginatedResult } from 'src/app/models/pagination/paginated-result.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesApiService {

  private static readonly CURRENCIES_URL = `${environment.apiUrl}/currencies`;

  constructor(private readonly httpClient: HttpClient) { }

  fetchCurrency(currencyFetchFormData: CurrencyFetchFormData): Observable<CurrencyFetchResult> {
    return this.httpClient.post<CurrencyFetchResult>(
      `${CurrenciesApiService.CURRENCIES_URL}/get-current-currency-value-command`,
      currencyFetchFormData
    );
  }

  getRequests(page: number): Observable<PaginatedResult<CurrencyRequest>> {
    const pageCountedFromZero = page - 1;
    const params = new HttpParams().set('page', pageCountedFromZero);
    return this.httpClient.get<PaginatedResult<CurrencyRequest>>(
      `${CurrenciesApiService.CURRENCIES_URL}/requests/paginated`,
      { params }
    );
  }

}
