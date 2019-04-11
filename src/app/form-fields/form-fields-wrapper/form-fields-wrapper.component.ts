import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormError } from '../input-field/input-field.component';
import { notSame } from '../validators';

@Component({
  selector: 'mst-form-fields-wrapper',
  templateUrl: './form-fields-wrapper.component.html',
  styleUrls: ['./form-fields-wrapper.component.scss']
})
export class FormFieldsWrapperComponent implements OnInit {
  formGroup: FormGroup;

  inputErrors: FormError[] = [
    {
      type: 'required',
      message: 'Required'
    },
    {
      type: 'maxlength',
      message: 'Max length is: {requiredLength}, your actual length: {actualLength}.'
    }
  ];
  input2Errors: FormError[] = [
    {
      type: 'required',
      message: 'Required'
    },
    {
      type: 'input2IsSameAsInput',
      message: 'This can\'t be the same as the previous input.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      input: ['', [Validators.required, Validators.maxLength(2)]],
      input2: ['', [Validators.required]],
    }, {
      validator: Validators.compose([
        notSame('input', 'input2')
      ])
    });
  }

  ngOnInit() {
  }

}
