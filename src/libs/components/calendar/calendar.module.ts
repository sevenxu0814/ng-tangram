import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NtNativeDateModule } from '@ng-tangram/components/core';

import { NtCalendarComponent } from './calendar.component';
import {
    NtCalendarCellDefDirective, NtCalendarCellDirective, NtCalendarCellOutletDirective,
    NtCalendarOutletDirective
} from './cell.directive';
import {
    NtCalendarRowComponent, NtCalendarRowDefDirective, NtCalendarRowOutletDirective
} from './row.directive';

@NgModule({
  imports: [CommonModule, NtNativeDateModule],
  exports: [
    NtCalendarComponent,
    NtCalendarOutletDirective,
    NtCalendarRowComponent,
    NtCalendarRowDefDirective,
    NtCalendarRowOutletDirective,
    NtCalendarCellDefDirective,
    NtCalendarCellDirective,
    NtCalendarCellOutletDirective
  ],
  declarations: [
    NtCalendarComponent,
    NtCalendarOutletDirective,
    NtCalendarRowComponent,
    NtCalendarRowDefDirective,
    NtCalendarRowOutletDirective,
    NtCalendarCellDefDirective,
    NtCalendarCellDirective,
    NtCalendarCellOutletDirective
  ]
})
export class NtCalendarModule { }
