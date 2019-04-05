import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalizeComponent } from './globalize.component';

describe('GlobalizeComponent', () => {
  let component: GlobalizeComponent;
  let fixture: ComponentFixture<GlobalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
