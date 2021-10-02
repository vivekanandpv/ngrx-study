import {createReducer, on} from "@ngrx/store";
import {incrementActionCreator} from "./general.actions";

export interface FeatureState {
  counter: number;
}

export const initialState: FeatureState = {
  counter: 0
};

export const generalReducerCreator = createReducer(
  initialState,
  on(incrementActionCreator, (state, action) => {
    //  return new state
    console.log('Action > ', action);
    const newCounter = {...state};
    ++newCounter.counter;
    return newCounter;
  })
);
