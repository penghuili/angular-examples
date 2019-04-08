import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TriggerParentComponent } from './trigger-parent/trigger-parent.component';

const routes: Routes = [
  {
    path: 'test-trigger-event',
    component: TriggerParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTriggerEventRoutingModule { }
