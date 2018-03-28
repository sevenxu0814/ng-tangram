import { NtDatePickerModule } from './../../../../packages/components/datepicker/datepicker.module';
import { NtSelectModule } from './../../../../packages/components/select/select.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NtExampleModule } from '@modules/example';
import { NtAntIconModule } from '@ng-tangram/components/ant-icon/ant-icon.module';
import { NtFormsModule } from '@ng-tangram/components/forms/forms.module';

import { FormsDocumentComponent } from './forms.component';

import { DemoFormLoginComponent } from './demos/login';
import { DemoFormInlineComponent } from './demos/inline';
import { NtCalloutModule } from '@ng-tangram/components/callout';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NtExampleModule,
    NtFormsModule,
    NtCalloutModule,
    NtSelectModule,
    NtDatePickerModule,
    NtAntIconModule,
    RouterModule.forChild([
      { path: '', component: FormsDocumentComponent }
    ])
  ],
  declarations: [FormsDocumentComponent, DemoFormLoginComponent, DemoFormInlineComponent]
})
export class FormsDocumentModule { }