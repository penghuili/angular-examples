import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mst-trigger-child',
  templateUrl: './trigger-child.component.html',
  styleUrls: ['./trigger-child.component.scss']
})
export class TriggerChildComponent {
  @Output() newNumber = new EventEmitter<number>();

  private count = 0;

  clickButton() {
    this.count = this.count + 1;
    this.newNumber.emit(this.count);
  }
}
