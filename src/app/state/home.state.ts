import { State, Selector, Action, StateContext } from '@ngxs/store';

export interface HomeStateModel {
  inputValue: string;
}

@State<HomeStateModel>({
  name: 'home',
  defaults: {
    inputValue: 'initial'
  }
})
export class HomeState {
  @Selector()
  static getInputValue(state: HomeStateModel): string {
    return state.inputValue;
  }

  @Action({ type: 'SetInputValue' })
  setInputValue(ctx: StateContext<HomeStateModel>, action: { payload: string }): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      inputValue: action.payload
    });
  }
}
