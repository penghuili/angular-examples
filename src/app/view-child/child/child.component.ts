import { Component } from '@angular/core';

@Component({
  selector: 'mst-child',
  template: 'child',
  styles: ['']
})
export class ChildComponent {
  getValue() {
    return 3;
  }
}
