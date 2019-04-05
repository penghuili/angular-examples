import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mst-parent',
  template: `
    <mst-child-wrapper *ngIf="showChild"></mst-child-wrapper>
  `,
  styles: ['']
})
export class ParentComponent implements OnInit {
  showChild = false;

  ngOnInit() {
    setTimeout(() => {
      this.showChild = true;
    }, 1000);
  }

}
