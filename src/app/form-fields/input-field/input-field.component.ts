import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mst-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() type = 'text';
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() controller: FormControl;
}
