import { Observable, BehaviorSubject } from 'rxjs';

export class Store<State> {
  public state$: Observable<State>;
  private _state$: BehaviorSubject<State>;

  protected constructor(initialState: State) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): State {
    return this._state$.getValue();
  }

  setState(nextState: State): void {
    this._state$.next(nextState);
  }
}
