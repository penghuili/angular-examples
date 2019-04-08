import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { hasContent, queryDebugElement } from 'src/testing/helper-functions';

import { TriggerChildComponent } from '../trigger-child/trigger-child.component';
import { TriggerParentComponent } from './trigger-parent.component';

describe('TriggerParentComponent', () => {
  let fixture: ComponentFixture<TriggerParentComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [
        TriggerParentComponent,

        TriggerChildComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerParentComponent);
    de = fixture.debugElement;
  });

  it('should click once', () => {
    fixture.detectChanges();
    queryDebugElement(de, 'button').nativeElement.click();
    fixture.detectChanges();

    hasContent(queryDebugElement(de, '.mst-click-count'), '1');
  });
  it('should focus once', () => {
    fixture.detectChanges();
    queryDebugElement(de, 'input').triggerEventHandler('focus', null);
    fixture.detectChanges();

    hasContent(queryDebugElement(de, '.mst-focus-count'), '1');
  });
  it('should has input value', () => {
    fixture.detectChanges();
    const inputEl = queryDebugElement(de, 'input');
    const value = 'trigger input event';
    inputEl.nativeElement.value = value
    inputEl.triggerEventHandler('input', { target: inputEl.nativeElement });
    fixture.detectChanges();

    hasContent(queryDebugElement(de, '.mst-input-value'), value);
  });
  it('should handle child event', () => {
    fixture.detectChanges();
    const childEl: TriggerChildComponent = de.query(By.directive(TriggerChildComponent)).componentInstance;
    childEl.newNumber.emit(3)
    fixture.detectChanges();

    hasContent(queryDebugElement(de, '.mst-child-count'), '3');
  });
});
