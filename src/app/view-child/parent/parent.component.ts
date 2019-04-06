import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mst-parent',
  template: `
    child should be shown in 1 second, and also check console.
    <div>
      <mst-child-wrapper *ngIf="showChild"></mst-child-wrapper>
    </div>
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
