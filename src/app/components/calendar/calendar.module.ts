import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NtCalendarModule } from '@ng-tangram/components';
import { NtExampleModule } from '@ng-tangram/example';

import { CalendarDocumentComponent } from './calendar.component';
import { DemoCalendarBasicComponent } from './demos/basic';

@NgModule({
  imports: [
    CommonModule,
    NtCalendarModule,
    NtExampleModule,
    RouterModule.forChild([
      { path: '', component: CalendarDocumentComponent }
    ])
  ],
  declarations: [DemoCalendarBasicComponent, CalendarDocumentComponent]
})
export class CalendarDocumentModule { }
