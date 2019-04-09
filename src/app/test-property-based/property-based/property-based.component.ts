import { Component, Input } from '@angular/core';

interface Todo {
  id: number;
  title: string;
}

@Component({
  selector: 'mst-property-based',
  templateUrl: './property-based.component.html',
  styleUrls: ['./property-based.component.scss']
})
export class PropertyBasedComponent {
  @Input() todos: Todo[];
}
