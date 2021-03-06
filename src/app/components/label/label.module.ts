
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NtExampleModule } from '@ng-tangram/example';
import { NtLabelModule } from '@ng-tangram/components/label';
import { NtMarkdownBlockModule } from '@ng-tangram/pro';

import { LabelDocumentComponent } from './label.component';
import { ExampleLabelBasicComponent } from './examples/basic';
import { ExampleLabelIconComponent } from './examples/icon';
import { ExampleLabelColorsComponent } from './examples/colors';

@NgModule({
  imports: [
    CommonModule,
    NtExampleModule,
    NtLabelModule,
    NtMarkdownBlockModule,
    RouterModule.forChild([
      { path: '', component: LabelDocumentComponent }
    ])],
  declarations: [LabelDocumentComponent, ExampleLabelBasicComponent, ExampleLabelIconComponent, ExampleLabelColorsComponent],
})
export class LabelDocumentModule { }
