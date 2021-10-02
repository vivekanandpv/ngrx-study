import {createSelector} from "@ngrx/store";
import {FeatureState, LanguageFeature} from "./general.reducer";

const counterSliceSelector = (state: any) => state.cSlice as FeatureState;

export const counterSelector = createSelector(
  counterSliceSelector,
  (featureSlice) => featureSlice.counter
)


const languageSliceSelector = (state: any) => state.languageSlice as LanguageFeature;

export const languageSelector = createSelector(
  languageSliceSelector,
  languageSlice => languageSlice.language
);
