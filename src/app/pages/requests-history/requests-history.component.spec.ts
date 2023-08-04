import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsHistoryComponent } from './requests-history.component';

describe('RequestsHistoryComponent', () => {
  let component: RequestsHistoryComponent;
  let fixture: ComponentFixture<RequestsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsHistoryComponent]
    });
    fixture = TestBed.createComponent(RequestsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});