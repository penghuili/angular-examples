import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FakeAsyncComponent } from './fake-async.component';

describe('FakeAsyncComponent', () => {
  let component: FakeAsyncComponent;
  let fixture: ComponentFixture<FakeAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeAsyncComponent);
    component = fixture.componentInstance;
  });

  it('observableValue doesn\'t need to wait', () => {
    fixture.detectChanges();
    expect(component.observableValue).toBe(1);

    component.ngOnDestroy();
  });

  it('intervalValue should be 0 without fakeAsync and tick', () => {
    fixture.detectChanges();
    expect(component.intervalValue).toBe(0);

    component.ngOnDestroy();
  });
  it('intervalValue should be 1 with fakeAsync and tick', fakeAsync(() => {
    fixture.detectChanges();
    // interval starts with 0, so we should tick 2 seconds to get 1
    tick(2000);
    fixture.detectChanges();
    expect(component.intervalValue).toBe(1);

    tick(1000);
    fixture.detectChanges();
    expect(component.intervalValue).toBe(2);

    component.ngOnDestroy();
  }));

  it('setTimeoutValue should be 0 without fakeAsync and tick', () => {
    fixture.detectChanges();
    expect(component.setTimeoutValue).toBe(0);

    component.ngOnDestroy();
  });
  it('setTimeoutValue should be 1 with fakeAsync and tick', fakeAsync(() => {
    fixture.detectChanges();
    tick(3000);
    fixture.detectChanges();
    expect(component.setTimeoutValue).toBe(1);

    component.ngOnDestroy();
  }));

  it('promise value should be 0 without fakeAsync and tick', () => {
    fixture.detectChanges();
    expect(component.promiseValue).toBe(0);

    component.ngOnDestroy();
  });
  it('promise value should be 1 with fakeAsync and tick', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.promiseValue).toBe(1);

    component.ngOnDestroy();
  }));
});
