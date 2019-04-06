import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesChildComponent } from './on-changes-child.component';

@Component({
  template: `
    <mst-on-changes-child [num]="1"></mst-on-changes-child>
  `,
})
export class TestWrapperComponent {
  num: number;
}

describe('OnChangesChildComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OnChangesChildComponent,

        TestWrapperComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should be 2', () => {
    component.num = 1;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toContain('2');
  });
});
