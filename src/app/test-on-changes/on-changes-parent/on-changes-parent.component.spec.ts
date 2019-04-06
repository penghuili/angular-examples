import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesParentComponent } from './on-changes-parent.component';

describe('OnChangesParentComponent', () => {
  let component: OnChangesParentComponent;
  let fixture: ComponentFixture<OnChangesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
