import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFormComponent } from './fetch-form.component';

describe('FetchFormComponent', () => {
  let component: FetchFormComponent;
  let fixture: ComponentFixture<FetchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchFormComponent]
    });
    fixture = TestBed.createComponent(FetchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
