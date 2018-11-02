import { transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation, Optional, Self,
  NgZone
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
  providers: [
    { provide: NtFormFieldControl, useExisting: NtTimePickerComponent }
  ],
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
export class NtTimePickerComponent extends NtFormFieldControl<string> implements ControlValueAccessor {

  readonly origin: CdkOverlayOrigin;

  private _format: string = 'HH:mm:ss';
  hourEnabled = true;
  minuteEnabled = true;
  secondEnabled = true;

  @Input() placeholder: string = '';
  @Input() disabled: boolean;
  @Input()
  set format(value: string) {
    this._format = value;
    const charSet = new Set(value);
    this.hourEnabled = charSet.has('H') || charSet.has('h');
    this.minuteEnabled = charSet.has('m');
    this.secondEnabled = charSet.has('s');
  }
  get format() {
    return this._format;
  }

  @Output() afterOpen = new EventEmitter<any>();
  @Output() afterClosed = new EventEmitter<any>();

  @Output() beforeOpen = new EventEmitter<any>();
  @Output() beforeClosed = new EventEmitter<any>();

  @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

  @ViewChild(NtOverlayComponent) overlay: NtOverlayComponent;

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

  value: string;

  hour: string = '00';
  minute: string = '00';
  second: string = '00';

  /** Emits when the value changes (either due to user input or programmatic change). */
  private _valueChange = new EventEmitter<string | null>();
  private _onChange: (value: any) => void = () => { };
  private _onTouched = () => { };

  constructor(
    private _elementRef: ElementRef,
    private ngZone: NgZone,

    @Self() @Optional() public ngControl: NgControl
  ) {
    super();
    this.origin = new CdkOverlayOrigin(_elementRef);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: string ) {
    let time = value.split(':');
    this.hour = time[0] ? time[0] : '00';
    this.minute = time[1] ? time[1] : '00';
    this.second = time[2] ? time[2] : '00';
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
    this._onChange(this.value);
  }

  _beforeOpen(event: any) {
    this.beforeOpen.next(event);

  }

  _beforeClosed(event: any) {
    this.beforeClosed.next(event);
  }

  _positionChange(change: ConnectedOverlayPositionChange) {
    this.positionChange.next(change);
  }

  selectHour(data: any) {
    this.hour = data;
    this.createTime();
    this._onChange(this.createTime());
  }

  selectMinute(data: any) {
    this.minute = data;
    this.createTime();
    this._onChange(this.createTime());
  }

  selectSecond(data: any) {
    this.second = data;
    this.createTime();
    this._onChange(this.createTime());
  }

  createTime() {
    let time: string[] = [];
    if (this.hourEnabled) {
      time.push(this.hour);
    }
    if (this.minuteEnabled) {
      time.push(this.minute);
    }
    if (this.secondEnabled) {
      time.push(this.second);
    }
    return this.value = time.join(':');
  }

  clear() {
    this.value = '';
    this.hour = this.minute = this.second = '00';
    this._onChange('');
  }
}
