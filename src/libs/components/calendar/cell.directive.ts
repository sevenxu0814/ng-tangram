import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ntCalendarCellDef]'
})
export class NtCalendarCellDefDirective<D> {
  @Input() when: (date: D) => boolean;

  constructor(public template: TemplateRef<any>) { }
}

@Directive({
  selector: 'nt-calendar-cell',
  host: {
    'class': 'nt-calendar-cell'
  }
})
export class NtCalendarCellDirective {

}
