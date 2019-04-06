import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { TestOnChangesRoutingModule } from './test-on-changes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestOnChangesRoutingModule
  ],
  declarations: [
    OnChangesChildComponent,
    OnChangesParentComponent,
  ],
})
export class TestOnChangesModule { }
