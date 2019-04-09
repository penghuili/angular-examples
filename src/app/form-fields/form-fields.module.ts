import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormFieldsRoutingModule } from './form-fields-routing.module';
import { FormFieldsWrapperComponent } from './form-fields-wrapper/form-fields-wrapper.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [FormFieldsWrapperComponent, InputFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormFieldsRoutingModule
  ]
})
export class FormFieldsModule { }
