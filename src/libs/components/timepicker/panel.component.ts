import { Component, OnInit } from '@angular/core';
import { NtOptionParentComponent, NT_OPTION_PARENT_COMPONENT } from '@ng-tangram/components/core';

@Component({
  selector: 'nt-timepicker-panel',
  templateUrl: './panel.component.html',
  providers: [
    { provide: NT_OPTION_PARENT_COMPONENT, useExisting: NtTimePickerPanelComponent },
  ]
})
export class NtTimePickerPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
