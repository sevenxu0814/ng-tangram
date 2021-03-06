import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NtFormsModule } from '@ng-tangram/components/forms';
import { NtPictureModule } from '@ng-tangram/components/picture';
import { NtExampleModule } from '@ng-tangram/example';
import { NtMarkdownBlockModule } from '@ng-tangram/pro';
import { NtRadioModule } from '@ng-tangram/components/radio';

import { ExamplePictureBasciComponent } from './examples/basic';
import { ExamplePictureEventComponent } from './examples/event';
import { ExamplePictureAcceptComponent } from './examples/accept';
import { PictureDocumentComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NtExampleModule,
    NtMarkdownBlockModule,
    NtRadioModule,
    NtPictureModule,
    NtFormsModule,
    RouterModule.forChild([
      { path: '', component: PictureDocumentComponent }
    ])
  ],
  declarations: [PictureDocumentComponent, ExamplePictureBasciComponent, ExamplePictureEventComponent, ExamplePictureAcceptComponent]
})
export class PictureDocumentModule { }
