import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-basic',
  template: `
    <nt-timepicker placeholder="开始日期"></nt-timepicker>
  `
})
export class DemoTimePickerBasicComponent {
  startDate = new Date(2012, 5, 20);
}
