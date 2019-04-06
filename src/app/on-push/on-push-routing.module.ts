import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnPushComponent } from './on-push/on-push.component';

const routes: Routes = [
  {
    path: 'on-push',
    component: OnPushComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnPushRoutingModule { }
