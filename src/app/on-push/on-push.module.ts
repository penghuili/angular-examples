import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnPushComponent } from './on-push/on-push.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OnPushComponent,
  ],
  exports: [
    OnPushComponent,
  ]
})
export class OnPushModule { }
