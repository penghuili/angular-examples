import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mst-on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrls: ['./on-changes-child.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnChangesChildComponent implements OnChanges {
  @Input() num = 0;
  updated: number;

  ngOnChanges() {
    this.updated = this.num + 1;
  }

}
