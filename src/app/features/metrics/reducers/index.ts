import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRating from './rating';

export interface MetricsState {
  rating: fromRating.State;
}

export interface State {
  metrics: MetricsState;
}

export const reducers: ActionReducerMap<MetricsState> = {
  rating: fromRating.reducer
};

export const _selectMetricsFeature = createFeatureSelector<MetricsState>('metrics');
export const _selectRatingState = createSelector(_selectMetricsFeature, state => state.rating);

export const _selectRatingMessage = createSelector(_selectRatingState, rating => rating.message);

const metricsComponentSelectors = {
  ratingMessage: _selectRatingMessage
};

export default metricsComponentSelectors;
