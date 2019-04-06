import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'mst-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit, OnDestroy {
  value = 100;

  private sub: Subscription;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.sub = interval(1000).subscribe((value) => {
      this.value = value;
      console.log(this.value);
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
