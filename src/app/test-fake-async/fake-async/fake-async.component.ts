import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, of } from 'rxjs';

@Component({
  selector: 'mst-fake-async',
  templateUrl: './fake-async.component.html',
  styleUrls: ['./fake-async.component.scss']
})
export class FakeAsyncComponent implements OnInit, OnDestroy {
  observableValue = 0;
  intervalValue = 0;
  setTimeoutValue = 0;
  promiseValue = 0;

  private observableSub: Subscription;
  private intervalSub: Subscription;
  private setTimeoutTimer: NodeJS.Timer;

  ngOnInit() {
    this.observableSub = of(1).subscribe((value) => {
      this.observableValue = value;
    });

    this.intervalSub = interval(1000).subscribe((value) => {
      this.intervalValue = value;
    });

    this.setTimeoutTimer = setTimeout(() => {
      this.setTimeoutValue = 1;
    }, 3000);

    Promise.resolve(1).then((value) => {
      this.promiseValue = value;
    });
  }
  ngOnDestroy() {
    this.observableSub.unsubscribe();
    this.intervalSub.unsubscribe();
    clearTimeout(this.setTimeoutTimer);
  }
}
