import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'example-select-required',
  template: `
    <form [formGroup]="form" ntFormAutofocus>
      <nt-form-field label="必填下拉框">
        <nt-select name="single" placeholder="单选" formControlName="single" required="true">
          <nt-option *ngFor="let alphabet of alphabets" [value]="alphabet">
            {{alphabet}}
          </nt-option>
        </nt-select>
      </nt-form-field>
      <button class="button" type="submit">Submit</button>
    </form>
  `
})
export class ExampleSelectRequiredComponent {

  form: FormGroup;
  alphabets = Array(26).fill(65).map((value, index) => String.fromCharCode(value + index));

  value = ['A'];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      single: ['Z', Validators.required],
    });
  }
}
