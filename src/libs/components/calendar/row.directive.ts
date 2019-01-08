import { Directive, Input, TemplateRef, ViewContainerRef, Component } from '@angular/core';

@Directive({
  selector: '[ntCalendarRowDef]'
})
export class NtCalendarRowDefDirective<D> {
  @Input() when: (date: D) => boolean;
  constructor(public template: TemplateRef<any>) {
  }
}

@Directive({
  selector: '[ntCalendarRowOutlet]'
})
export class NtCalendarRowOutletDirective {

  static mostRecentCellOutlet: NtCalendarRowOutletDirective | null = null;

  constructor(public _viewContainer: ViewContainerRef) {
    NtCalendarRowOutletDirective.mostRecentCellOutlet = this;
  }

  ngOnDestroy() {
    // If this was the last outlet being rendered in the view, remove the reference
    // from the static property after it has been destroyed to avoid leaking memory.
    if (NtCalendarRowOutletDirective.mostRecentCellOutlet === this) {
      NtCalendarRowOutletDirective.mostRecentCellOutlet = null;
    }
  }
}

@Component({
  selector: 'nt-calendar-row, tr[nt-calendar-row]',
  template: `
    <ng-container *ntCalendarRowOutlet></ng-container>
  `,
  host: {
    'class': 'nt-calendar-row'
  }
})
export class NtCalendarRowComponent {

}
