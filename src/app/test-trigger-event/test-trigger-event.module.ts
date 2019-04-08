import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestTriggerEventRoutingModule } from './test-trigger-event-routing.module';
import { TriggerChildComponent } from './trigger-child/trigger-child.component';
import { TriggerParentComponent } from './trigger-parent/trigger-parent.component';

@NgModule({
  declarations: [TriggerParentComponent, TriggerChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestTriggerEventRoutingModule
  ]
})
export class TestTriggerEventModule { }
