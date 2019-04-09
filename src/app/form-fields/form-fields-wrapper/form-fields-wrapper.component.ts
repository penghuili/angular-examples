import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mst-form-fields-wrapper',
  templateUrl: './form-fields-wrapper.component.html',
  styleUrls: ['./form-fields-wrapper.component.scss']
})
export class FormFieldsWrapperComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: [''],
    });
  }

  ngOnInit() {
  }

}
