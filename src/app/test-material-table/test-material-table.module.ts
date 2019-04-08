import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { MaterialTableComponent } from './material-table/material-table.component';
import { TestMaterialTableRoutingModule } from './test-material-table-routing.module';

@NgModule({
  declarations: [MaterialTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    TestMaterialTableRoutingModule
  ]
})
export class TestMaterialTableModule { }
