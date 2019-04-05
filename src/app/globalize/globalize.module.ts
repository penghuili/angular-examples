import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GlobalizeComponent } from './globalize/globalize.component';

@NgModule({
  declarations: [GlobalizeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalizeComponent,
  ]
})
export class GlobalizeModule { }
