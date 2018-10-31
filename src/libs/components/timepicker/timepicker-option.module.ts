import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NtOverlayModule } from '@ng-tangram/components/core';

import { NtTimepickerOptionComponent } from './timepicker-option.component';

@NgModule({
  imports: [CommonModule, NtOverlayModule],
  exports: [NtTimepickerOptionComponent],
  declarations: [NtTimepickerOptionComponent]
})
export class NtTimepickerOptionModule { }
