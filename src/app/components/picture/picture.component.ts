
import { Component } from '@angular/core';

@Component({
  selector: 'example-picture-document',
  templateUrl: 'picture.component.md'
})
export class PictureDocumentComponent {
  basicCode = require('!!raw-loader!./examples/basic');
  eventCode = require('!!raw-loader!./examples/event');
  acceptCode = require('!!raw-loader!./examples/accept');
  api = require('!!raw-loader!src/libs/components/picture/README.md');
}
