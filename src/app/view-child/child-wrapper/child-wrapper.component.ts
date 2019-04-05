import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'mst-child-wrapper',
  template: '<mst-child></mst-child>',
  styles: [''],
})
export class ChildWrapperComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit() {
    console.log(this.child.getValue());
  }
}
