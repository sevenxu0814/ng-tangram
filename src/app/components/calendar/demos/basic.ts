import { Component } from '@angular/core';

@Component({
  selector: 'demo-calendar-basic',
  template: `
    <nt-calendar>
      <nt-calendar-cell *ntCalendarCellDef="let date" [class.disabled]="!date.enabled">
        <div class="nt-calendar-header-cell">{{date.displayValue}}</div>
        <div class="nt-calendar-content-cell">
          <ng-container *ngIf="date.value === 8">
            8号才可以显示该内容
          </ng-container>
        </div>
      </nt-calendar-cell>
    </nt-calendar>
  `
})
export class DemoCalendarBasicComponent {

}

