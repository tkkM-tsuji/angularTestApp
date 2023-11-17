import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from './table/table.component'; // Assuming the UserData interface is in the same file

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.css']
})
export class AboutContainerComponent implements OnInit {
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();

  ngOnInit() {
    const users: UserData[] = [
      { id: '1', name: 'Tanaka', progress: '75%', color: 'red' },
      { id: '2', name: 'Doe', progress: '50%', color: 'blue' ,  newProperty: 'value2' },
      { id: '3', name: 'Jane', progress: '90%', color: 'green' ,  newProperty: 'value3' },
    ];

    this.dataSource.data = users;
  }
}
