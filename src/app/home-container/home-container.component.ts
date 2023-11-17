import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { HomeState } from '../state/home.state';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {
  inputValue = ''; // Remove explicit type annotation

  constructor(private store: Store) { }

  onButtonClick(): void {
    this.store.dispatch({ type: 'SetInputValue', payload: this.inputValue });
  }

  getInputValue(): string {
    return this.store.selectSnapshot(HomeState.getInputValue);
  }
}
