import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'demo-timepicker-basic',
  template: `
      <form [formGroup]="form" ntFormOrientation="horizontal">
        <nt-form-field label="时间">
            <nt-timepicker formControlName="time" format="hh" placeholder="开始日期"></nt-timepicker>
        </nt-form-field>
    </form>

  `
})
export class DemoTimePickerBasicComponent {

  startDate = new Date(2012, 5, 20);

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
        time: ['12:44:44', Validators.required]
    });

    this.form.valueChanges.subscribe(res => console.log(res));

  }

}
