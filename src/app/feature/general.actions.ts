import {createAction, props} from '@ngrx/store';

export interface CounterPayload {
  factor: number;
}

export interface LanguagePayload {
  language: string;
}

export const incrementActionCreator = createAction(
  '[Counter] increment',
  props<CounterPayload>()
);

export const changeLanguage = createAction(
  '[Container] change language',
  props<LanguagePayload>()
);


