import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
}
