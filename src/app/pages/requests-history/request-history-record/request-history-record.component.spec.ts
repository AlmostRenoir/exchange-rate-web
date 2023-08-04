import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHistoryRecordComponent } from './request-history-record.component';

describe('RequestHistoryRecordComponent', () => {
  let component: RequestHistoryRecordComponent;
  let fixture: ComponentFixture<RequestHistoryRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestHistoryRecordComponent]
    });
    fixture = TestBed.createComponent(RequestHistoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
