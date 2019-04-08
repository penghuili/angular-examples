import { Component } from '@angular/core';

@Component({
  selector: 'mst-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = [
    {position: 1, name: 'Hydrogen'},
  ];
}
