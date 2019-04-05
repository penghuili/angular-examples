import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChildWrapperComponent } from './child-wrapper/child-wrapper.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChildComponent,
    ParentComponent,
    ChildWrapperComponent,
  ],
  exports: [
    ParentComponent,
  ]
})
export class ViewChildModule { }
