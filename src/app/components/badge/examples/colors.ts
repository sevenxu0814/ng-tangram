import { Component } from '@angular/core';

@Component({
  selector: 'example-badge-colors',
  template: `
    <nt-badge color="primary">9</nt-badge>
    <nt-badge color="secondary">2</nt-badge>
    <nt-badge color="success">3</nt-badge>
    <nt-badge color="alert">A</nt-badge>
    <nt-badge color="warning">B</nt-badge>
  `
})
export class ExampleBadgeColorsComponent {
  constructor() { }
}
