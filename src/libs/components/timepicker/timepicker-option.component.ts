import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren,
  ViewEncapsulation, QueryList, Inject, forwardRef, AfterViewInit
} from '@angular/core';
import { NtTimePickerComponent } from './timepicker.component';

// 滚动距离动画帧数
const FPS = 30;

// 完成滚动的总时间
const PERIOD = 200;

@Component({
  selector: 'nt-timepicker-option',
  templateUrl: 'timepicker-option.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-timepicker-option'
  }
})
export class NtTimepickerOptionComponent implements OnInit, AfterViewInit {

  private _targetValue: string;

  @Input() time: any;

  @Output() selectChange = new EventEmitter<any>();

  @Input()
  set targetValue(value: string) {
    if (value) {
      this._targetValue = value;
      return;
    }
    this._targetValue = '00';
  }
  get targetValue() {
    return this._targetValue;
  }

  @ViewChild('panel') panel: ElementRef;
  @ViewChildren('options') options: QueryList<ElementRef>;

  isScrolling: boolean = false;

  constructor(
    @Inject(forwardRef(() => NtTimePickerComponent)) private _parent: NtTimePickerComponent
  ) { }

  ngOnInit() {
    this._parent.beforeOpen.subscribe(() => this.select(this.targetValue, true));
  }

  ngAfterViewInit() {
    this.options.changes.subscribe(() => this.options.toArray());
  }

  select(timeItem: any, isInit: boolean = false) {

    if (!timeItem) {
      return;
    }

    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;

    // 当前选中的时间
    let activeItem: ElementRef = this.options.find((item: ElementRef) => {
      return item.nativeElement.innerText === timeItem;
    });

    // 已滚动的距离
    let panelScrollTop = this.panel.nativeElement.scrollTop;
    let scrollDistance = activeItem.nativeElement.offsetTop - panelScrollTop;
    // 滚动动画 - 开始
    let distance = 0;
    let timer = setInterval(() => {
      distance += (scrollDistance / FPS);
      if (distance <= scrollDistance) {
        this.panel.nativeElement.scrollTop = panelScrollTop + distance;
      }
    }, !isInit ? PERIOD / FPS : 0);

    setTimeout(() => {
      this.panel.nativeElement.scrollTop = panelScrollTop + scrollDistance;
      clearInterval(timer);
      this.isScrolling = false;
    }, !isInit ? PERIOD : 0);
    // 滚动动画 - 结束
    if (!isInit) {
      this.targetValue = timeItem;
      this.selectChange.emit(timeItem);
    }
  }
}
