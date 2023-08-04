import { TestBed } from '@angular/core/testing';

import { CurrenciesApiService } from './currencies-api.service';

describe('CurrenciesApiService', () => {
  let service: CurrenciesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
