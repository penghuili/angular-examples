import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormFieldsWrapperComponent } from './form-fields-wrapper/form-fields-wrapper.component';

const routes: Routes = [
  {
    path: 'form-fields',
    component: FormFieldsWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormFieldsRoutingModule { }
