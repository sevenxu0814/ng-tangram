import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-calendar-document',
  templateUrl: 'calendar.component.md'
})
export class CalendarDocumentComponent {
  basicCode = require('!!raw-loader!./demos/basic');
}
