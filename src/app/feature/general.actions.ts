import {createAction, props} from '@ngrx/store';

export interface CounterPayload {
  factor: number;
}

export const incrementActionCreator = createAction(
  '[Counter] increment',
  props<CounterPayload>()
);


