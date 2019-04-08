import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mst-trigger-parent',
  templateUrl: './trigger-parent.component.html',
  styleUrls: ['./trigger-parent.component.scss']
})
export class TriggerParentComponent implements OnInit, OnDestroy {
  clickCount = 0;
  focusCount = 0;
  inputValue = '';
  childCount = 0;

  formControl = new FormControl();

  private valueChangeSub: Subscription;

  ngOnInit() {
    this.valueChangeSub = this.formControl.valueChanges.subscribe((value) => {
      this.inputValue = value;
    });
  }
  ngOnDestroy() {
    this.valueChangeSub.unsubscribe();
  }

  clickButton() {
    this.clickCount = this.clickCount + 1;
  }
  focusInput() {
    this.focusCount = this.focusCount + 1;
  }
  handleNewNumber(num: number) {
    this.childCount = num;
  }
}
