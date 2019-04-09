import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PropertyBasedWrapperComponent } from './property-based-wrapper/property-based-wrapper.component';
import { PropertyBasedComponent } from './property-based/property-based.component';
import { TestPropertyBasedRoutingModule } from './test-property-based-routing.module';

@NgModule({
  declarations: [PropertyBasedComponent, PropertyBasedWrapperComponent],
  imports: [
    CommonModule,
    TestPropertyBasedRoutingModule
  ]
})
export class TestPropertyBasedModule { }
