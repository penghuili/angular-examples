import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GlobalizeRoutingModule } from './globalize-routing.module';
import { GlobalizeComponent } from './globalize/globalize.component';

@NgModule({
  declarations: [GlobalizeComponent],
  imports: [
    CommonModule,
    GlobalizeRoutingModule,
  ],
})
export class GlobalizeModule { }
