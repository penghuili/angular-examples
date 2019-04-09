import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mst-property-based-wrapper',
  templateUrl: './property-based-wrapper.component.html',
  styleUrls: ['./property-based-wrapper.component.scss']
})
export class PropertyBasedWrapperComponent {
  todos = [
    {
      id: 1,
      title: 'todo 1',
    }
  ];
}
