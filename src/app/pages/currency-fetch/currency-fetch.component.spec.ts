import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFetchComponent } from './currency-fetch.component';

describe('CurrencyFetchComponent', () => {
  let component: CurrencyFetchComponent;
  let fixture: ComponentFixture<CurrencyFetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyFetchComponent]
    });
    fixture = TestBed.createComponent(CurrencyFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
