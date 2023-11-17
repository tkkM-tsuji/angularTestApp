import { Component } from '@angular/core';

@Component({
  selector: 'app-for-if',
  templateUrl: './for-if.component.html',
  styleUrls: ['./for-if.component.css']
})
export class ForIfComponent {
  showList = false;
  items: string[] = ['Item A', 'Item B', 'Item C', 'Item D'];

  toggleList(): void {
    this.showList = !this.showList;
  }


}
