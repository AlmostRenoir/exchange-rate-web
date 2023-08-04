import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyFetchFormData } from 'src/app/models/currency-fetch/currency-fetch-form-data.model';

@Component({
  selector: 'app-fetch-form',
  templateUrl: './fetch-form.component.html',
  styleUrls: ['./fetch-form.component.scss']
})
export class FetchFormComponent {

  @Output() fetch = new EventEmitter<CurrencyFetchFormData>();

  fetchForm = new FormGroup({
    name: new FormControl('', Validators.required),
    currency: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  onSubmit(): void {
    const formData = new CurrencyFetchFormData(
      this.fetchForm.value.name!,
      this.fetchForm.value.currency!
    )
    this.fetch.emit(formData);
  }

  get name() { return this.fetchForm.get('name'); }
  get currency() { return this.fetchForm.get('currency'); }
}
