import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NtNativeDateModule } from '@ng-tangram/components/core';

import { NtCalendarComponent } from './calendar.component';

@NgModule({
  imports: [CommonModule, NtNativeDateModule],
  exports: [NtCalendarComponent],
  declarations: [NtCalendarComponent]
})
export class NtCalendarModule { }
