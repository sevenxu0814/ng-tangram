import { transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation, Optional, Self
} from '@angular/core';
import { fadeIn, fadeOut } from '@ng-tangram/animate/fading';
import { NtOverlayComponent } from '@ng-tangram/components/core/overlay/overlay.component';
import { DateAdapter } from '@ng-tangram/components/core';
import { NtFormFieldControl } from '@ng-tangram/components/forms';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'nt-timepicker',
  templateUrl: './timepicker.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-timepicker nt-form-control',
    '[class.focus]': 'overlay.isOpen'
  },
  animations: [
    trigger('fade', [
      transition('* => void', fadeOut(.15)),
      transition('void => *', fadeIn(.15))
    ])
  ],
})
export class NtTimePickerComponent<D> extends NtFormFieldControl<D> implements OnInit, ControlValueAccessor {

  readonly origin: CdkOverlayOrigin;

  @Input() placeholder: string;
  @Input() disabled: boolean;

  @Output() afterOpen = new EventEmitter<any>();
  @Output() afterClosed = new EventEmitter<any>();

  @Output() beforeOpen = new EventEmitter<any>();
  @Output() beforeClosed = new EventEmitter<any>();

  @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

  @ViewChild(NtOverlayComponent) overlay: NtOverlayComponent;
  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChild('hourPanel') hourPanel: ElementRef;

  hours: any = [
    '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23'
  ];

  seconds: any = [
    '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59'
  ];
  currentTime: Date = new Date();
  value: D;

  hour: string;
  minute: string;
  second: string;

  /** Emits when the value changes (either due to user input or programmatic change). */
  private _valueChange = new EventEmitter<D | null>();
  private _onChange: (value: any) => void = () => {};
  private _onTouched = () => {};

  constructor(
    private _elementRef: ElementRef,
    @Self() @Optional() public ngControl: NgControl
  ) {
    super();
    this.origin = new CdkOverlayOrigin(_elementRef);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(1);
    this.createTime();
  }

  createTime() {
    this.hour = this.hour || this.checkTime(new Date().getHours());
    this.minute = this.minute || this.checkTime(new Date().getMinutes());
    this.second = this.second || this.checkTime(new Date().getSeconds());
    this.inputElement.nativeElement.value = `${this.hour}:${this.minute}:${this.second}`;
  }

  checkTime(i: any) {
    if (i < 10) { i = "0" + i; }
    return i + '';
  }

  writeValue(value: D) {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this._onTouched = fn;
  }

  _onInputFocus() {
    if (!this.disabled) {
      this.overlay.show();
    }
  }

  _afterOpen(event: any) {
    this.afterOpen.next(event);
  }

  _afterClosed(event: any) {
    this.afterClosed.next(event);
  }

  _beforeOpen(event: any) {
    this.beforeOpen.next(event);
    // this.options.toArray().for
  }

  _beforeClosed(event: any) {
    this.beforeClosed.next(event);
  }

  _positionChange(change: ConnectedOverlayPositionChange) {
    this.positionChange.next(change);
  }

  selectHour(data: any) {
    console.log('hour', data);
  }

  selectMinute(data: any) {
    console.log('minute', data);
  }

  selectSecond(data: any) {
    console.log('second', data);
  }
}
