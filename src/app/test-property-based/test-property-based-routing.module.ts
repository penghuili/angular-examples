import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyBasedWrapperComponent } from './property-based-wrapper/property-based-wrapper.component';

const routes: Routes = [
  {
    path: 'test-property-based',
    component: PropertyBasedWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPropertyBasedRoutingModule { }
