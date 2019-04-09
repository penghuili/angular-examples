import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBasedWrapperComponent } from './property-based-wrapper.component';

describe('PropertyBasedWrapperComponent', () => {
  let component: PropertyBasedWrapperComponent;
  let fixture: ComponentFixture<PropertyBasedWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBasedWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBasedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
