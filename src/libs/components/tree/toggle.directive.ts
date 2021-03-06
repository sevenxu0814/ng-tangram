import { CdkTreeNodeToggle } from '@angular/cdk/tree';
import { Directive, Input } from '@angular/core';


@Directive({
  selector: '[ntTreeNodeToggle]',
  host: {
    '(click)': '_toggle($event)',
  },
  providers: [{ provide: CdkTreeNodeToggle, useExisting: NtTreeNodeToggleDirective }]
})
export class NtTreeNodeToggleDirective<T> extends CdkTreeNodeToggle<T> {
  @Input('ntTreeNodeToggleRecursive') recursive: boolean = false;
}
