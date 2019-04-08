import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialTableComponent } from './material-table/material-table.component';

const routes: Routes = [
  {
    path: 'test-material-table',
    component: MaterialTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMaterialTableRoutingModule { }
