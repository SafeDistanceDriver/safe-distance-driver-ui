import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface VisualizationsState {
}

export interface State {
  visualizations: VisualizationsState;
}

export const reducers: ActionReducerMap<VisualizationsState> = {
};

export const _selectVisualizationsFeature = createFeatureSelector<VisualizationsState>('visualizations');

const visualizationsComponentSelectors = {
};

export default visualizationsComponentSelectors;
