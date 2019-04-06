import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnPushRoutingModule } from './on-push-routing.module';
import { OnPushComponent } from './on-push/on-push.component';

@NgModule({
  imports: [
    CommonModule,
    OnPushRoutingModule
  ],
  declarations: [
    OnPushComponent,
  ],
})
export class OnPushModule { }
