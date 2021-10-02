import {createSelector} from "@ngrx/store";
import {FeatureState} from "./general.reducer";

const counterSliceSelector = (state: any) => state.cSlice as FeatureState;

export const counterSelector = createSelector(
  counterSliceSelector,
  (featureSlice) => featureSlice.counter
)
