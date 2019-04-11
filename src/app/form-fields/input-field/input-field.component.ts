import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export interface FormError {
  type: string;
  message: string;
}

export class MSTErrorStateMatcher implements ErrorStateMatcher {
  private errors: FormError[] = [];
  constructor(errors: FormError[]) {
    this.errors = errors;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // If we don't do this, global form errors will never be shown
    const error = this.errors.find(e => {
      return control && (control.touched || control.dirty) && (control.getError(e.type) || (form && form.getError(e.type)) || (control.parent && control.parent.getError(e.type)));
    });
    return !!error && (control.touched || control.dirty || isSubmitted);
  }
}
@Component({
  selector: 'mst-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() type = 'text';
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() controller: FormControl;
  @Input() errors: FormError[];

  errorMatcher: MSTErrorStateMatcher;

  ngOnInit() {
    this.errorMatcher = new MSTErrorStateMatcher(this.errors);
  }

  getErrorMessage(): string {
    if (this.errors && this.controller && (this.controller.touched || this.controller.dirty)) {
      const error = this.errors.find(v => !!this.getErrorObject(v.type));
      const errorObject = error ? this.getErrorObject(error.type) : null;
      return this.constructErrorMessage(error, errorObject);
    }
    return '';
  }

  private getErrorObject(errorType: string) {
    // also check parent errors
    const errors = this.controller.errors || (this.controller.parent ? this.controller.parent.errors : null);
    return errors ? errors[errorType] : null;
  }
  private constructErrorMessage(error: FormError, errorObject: any): string {
    if (error && errorObject) {
      if (typeof errorObject === 'object') {
        // replace "{errorKey}" with data from error object
        return error.message.replace(/\{[\s\S]*?\}/g, (part) => {
          const removed = part.replace(/[\{\}]/g, '').trim();
          return errorObject[removed];
        });
      }
      return error.message;
    }
    return '';
  }
}
