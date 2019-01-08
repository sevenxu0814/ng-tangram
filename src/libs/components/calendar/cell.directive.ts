import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[ntCalendarCellDef]'
})
export class NtCalendarCellDefDirective<D> {
  @Input() when: (date: D) => boolean;
  constructor(
    public template: TemplateRef<any>
    ) { }
}

@Directive({
  selector: 'nt-calendar-cell, td[nt-calendar-cell]',
  host: {
    'class': 'nt-calendar-cell'
  }
})
export class NtCalendarCellDirective {

}

@Directive({
  selector: '[ntCalendarCellOutlet]'
})
export class NtCalendarCellOutletDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Directive({
  selector: '[ntCalendarOutlet]'
})
export class NtCalendarOutletDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
