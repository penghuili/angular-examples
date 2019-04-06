import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChildWrapperComponent } from './child-wrapper/child-wrapper.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewChildRoutingModule } from './view-child-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ],
  declarations: [
    ChildComponent,
    ParentComponent,
    ChildWrapperComponent,
  ],
})
export class ViewChildModule { }
