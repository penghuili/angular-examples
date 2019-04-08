import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerChildComponent } from './trigger-child.component';

describe('TriggerChildComponent', () => {
  let component: TriggerChildComponent;
  let fixture: ComponentFixture<TriggerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
