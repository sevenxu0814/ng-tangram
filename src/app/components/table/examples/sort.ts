import { Component } from '@angular/core';
import { NtColumnSortChange } from '@ng-tangram/components/table';

@Component({
  selector: 'example-table-sort',
  template: `
  <nt-table #table [dataSource]="dataSource" (sortChange)="onSortChange($event)">
    <nt-column name="name">
      <nt-column-header *ntColumnHeaderDef>名称</nt-column-header>
      <nt-column-cell *ntColumnCellDef="let item">{{ item.name }}</nt-column-cell>
    </nt-column>

    <nt-column name="age" align="center" sortable>
      <nt-column-header *ntColumnHeaderDef>年龄</nt-column-header>
      <nt-column-cell *ntColumnCellDef="let item">{{ item.age }}</nt-column-cell>
    </nt-column>

    <nt-column name="address" align="right" sortable>
      <nt-column-header *ntColumnHeaderDef>地址</nt-column-header>
      <nt-column-cell *ntColumnCellDef="let item">{{ item.address }}</nt-column-cell>
    </nt-column>

    <nt-header-row *ntHeaderRowDef="displayedColumns"></nt-header-row>
    <nt-row *ntRowDef="let row; columns: displayedColumns;"></nt-row>
  </nt-table>

  <nt-callout>
    {{ sortChange | json }}
  </nt-callout>
  `
})
export class ExampleTableSortComponent {

  dataSource = [
    { id: 1, name: '张三', age: 20, address: '北京' },
    { id: 2, name: '李四', age: 22, address: '上海' },
    { id: 3, name: '王五', age: 18, address: '广州' },
    { id: 4, name: '赵六', age: 27, address: '大连' }
  ];

  displayedColumns = ['name', 'age', 'address'];

  sortChange: NtColumnSortChange;

  onSortChange(change: NtColumnSortChange) {
    this.sortChange = change;
  }
}
