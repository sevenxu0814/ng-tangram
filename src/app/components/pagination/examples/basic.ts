import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'example-pagination-basic',
  template: `
    <nt-pagination [total]="total" [pageIndex]="no" [pageSize]="size" showSkipButton="true" [options]="options"></nt-pagination>
  `
})
export class ExamplePaginationBasicComponent implements OnInit {
  // pageIndex = 1;
  total = 0;
  // pageSize = 10;

  no = 1;
  size = 10;

  options = {
    previousSkipLabel: '跳至',
    nextSkipLabel: '页'
  };

  ngOnInit() {
    setTimeout(() => {
      this.total = 16;
    }, 500);
  }
}
