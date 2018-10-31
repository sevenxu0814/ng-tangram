import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren,
    ViewEncapsulation,
    QueryList
} from '@angular/core';

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
export class NtTimepickerOptionComponent implements OnInit {

  @Input() time: any;

  @Output() selectChange = new EventEmitter<any>();

  @Input() targetValue: string;

  @ViewChild('panel') panel: ElementRef;
  @ViewChildren('options') options: QueryList<ElementRef>;

  isScrolling: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }
  ngAfterViewInit() {
    this.options.changes.subscribe(() => {
      this.options.toArray();
    });
    // console.log(this.options);
    // let data = this.options.find((item: ElementRef) => {
    //   return item.nativeElement.innerText === this.targetValue;
    // });
    // console.log(data);
    setTimeout(() => {
      this.select(this.targetValue);
    }, 1);
  }

  select(timeItem: any) {

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
    }, PERIOD / FPS);

    setTimeout(() => {
      this.panel.nativeElement.scrollTop = panelScrollTop + scrollDistance;
      clearInterval(timer);
      this.isScrolling = false;
    }, PERIOD);
    // 滚动动画 - 结束

    this.targetValue = timeItem;
    this.selectChange.emit(timeItem);
  }
}