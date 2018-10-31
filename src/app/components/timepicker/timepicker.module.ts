import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NtTimePickerModule } from '@ng-tangram/components/timepicker';
import { NtFormsModule } from '@ng-tangram/components/forms';
import { NtExampleModule } from '@ng-tangram/example';

import { TimePickerDocumentComponent } from './timepicker.component';
import { DemoTimePickerBasicComponent } from './demos/basic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NtTimePickerModule,
    NtExampleModule,
    NtFormsModule,
    RouterModule.forChild([
      { path: '', component: TimePickerDocumentComponent }
    ])
  ],
  declarations: [TimePickerDocumentComponent, DemoTimePickerBasicComponent]
})
export class TimePickerDocumentModule { }
