import { AnimationEvent, transition, trigger } from '@angular/animations';
import { OverlayOrigin } from '@angular/cdk/overlay';
import {
  Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation
} from '@angular/core';
import { fadeIn, fadeOut } from '@ng-tangram/animate/fading';
import { NtOverlayComponent, NtOverlayPosition } from '@ng-tangram/components/core/overlay';

@Component({
  selector: '[nt-popconfirm]',
  templateUrl: 'popconfirm.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(click)': 'overlay.click()'
  }
})
export class NtPopConfirmComponent {

  readonly origin: OverlayOrigin;

  @Input('nt-popconfirm') title = '';
  @Input() position = 'top';

  @Output() onConfirm = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  @ViewChild(NtOverlayComponent) overlay: NtOverlayComponent;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) {
    this.origin = new OverlayOrigin(_elementRef);
  }

  confirm() {
    this.onConfirm.emit();
    this.overlay.hide();
  }

  cancel() {
    this.onCancel.emit();
    this.overlay.hide();
  }
}