import {createReducer, on} from "@ngrx/store";
import {changeLanguage, incrementActionCreator} from "./general.actions";
import produce from "immer";


export interface FeatureState {
  counter: number;
}

export const initialState: FeatureState = {
  counter: 0
};

export interface LanguageFeature {
  language: string;
}

export const languageInitialState: LanguageFeature = {
  language: 'english'
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

export const languageReducer = createReducer(
  languageInitialState,
  on(changeLanguage, (state, action) => {
    return produce(state, s => {
      s.language = action.language;
    });
  })
);
