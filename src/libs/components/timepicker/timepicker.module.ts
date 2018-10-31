import { NtOptionModule } from '@ng-tangram/components/core/option/option.module';
import { FormsModule } from '@angular/forms';
import { NtMenuModule } from '@ng-tangram/components/menu';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NtTimePickerComponent } from './timepicker.component';
import { NtOverlayModule } from '@ng-tangram/components/core';
import { NtTimepickerOptionModule } from '@ng-tangram/components/timepicker/timepicker-option.module';
import { NtTimePickerPanelComponent } from '@ng-tangram/components/timepicker/panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NtOverlayModule,
    NtMenuModule,
    NtTimepickerOptionModule,
    NtOptionModule
  ],
  exports: [NtTimePickerComponent, NtTimePickerPanelComponent],
  declarations: [NtTimePickerComponent, NtTimePickerPanelComponent]
})
export class NtTimePickerModule { }
