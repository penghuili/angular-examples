import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalizeComponent } from './globalize/globalize.component';

const routes: Routes = [
  {
    path: 'globalize',
    component: GlobalizeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalizeRoutingModule { }
