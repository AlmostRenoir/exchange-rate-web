import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageChangedEvent, PaginationComponent } from 'ngx-bootstrap/pagination';
import { Observable, Subscription, asyncScheduler, fromEvent, tap, throttleTime } from 'rxjs';

import { Breakpoint } from 'src/app/config/breakpoint.enum';
import { CurrencyRequest } from 'src/app/models/currency-request/currency-request.model';
import { PaginatedResult } from 'src/app/models/pagination/paginated-result.model';
import { CurrenciesApiService } from 'src/app/services/api/currencies/currencies-api.service';

@Component({
  selector: 'app-requests-history',
  templateUrl: './requests-history.component.html',
  styleUrls: ['./requests-history.component.scss']
})
export class RequestsHistoryComponent implements OnInit, OnDestroy {

  @ViewChild(PaginationComponent) paginationComponent!: PaginationComponent;

  protected readonly ITEMS_PER_PAGE = 50;

  private resizeSubscription!: Subscription;
  paginationMaxSize = 3;
  totalItems = 0;
  requests$: Observable<PaginatedResult<CurrencyRequest>>;

  constructor(private readonly currenciesApiService: CurrenciesApiService) {
    this.requests$ = this.fetchRequests(1);
  }

  ngOnInit(): void {
    this.paginationMaxSize = this.determinePaginationMaxSize();

    this.resizeSubscription = fromEvent(window, 'resize').pipe(
      throttleTime(300, asyncScheduler, { trailing: true })
    ).subscribe(this.updatePaginationMaxSize.bind(this));
  }

  private updatePaginationMaxSize(): void {
    this.paginationMaxSize = this.determinePaginationMaxSize();
    // To make sure that the new maxSize is set before rerendering, otherwise, it won't work when maximizing or restoring the window.
    this.paginationComponent.maxSize = this.paginationMaxSize;
    // The pagination component does not rerender on maxSize change but does rerender on page selection.
    this.paginationComponent.selectPage(this.paginationComponent.page);
  }

  private determinePaginationMaxSize(): number {
    const screenWidth = window.innerWidth;
    if (screenWidth < Breakpoint.Small) return 3;
    if (screenWidth < Breakpoint.Medium) return 6;
    if (screenWidth < Breakpoint.Large) return 9;
    if (screenWidth < Breakpoint.ExtraLarge) return 12;
    if (screenWidth < Breakpoint.ExtraExtraLarge) return 15;
    return 18;
  }

  onPageChanged(event: PageChangedEvent): void {
    this.requests$ = this.fetchRequests(event.page);
  }

  private fetchRequests(page: number): Observable<PaginatedResult<CurrencyRequest>> {
    return this.currenciesApiService.getRequests(page)
      .pipe(
        tap(requests => this.totalItems = requests.totalPages * this.ITEMS_PER_PAGE)
      );
  }

  trackByRequestId(index: number, request: CurrencyRequest): string {
    return request.id;
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

}
