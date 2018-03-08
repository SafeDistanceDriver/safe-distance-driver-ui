import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGraphs from './graphs';
import { DataPoint, GraphData } from '../models';

export interface VisualizationsState {
  graphs: fromGraphs.State;
}

export interface State {
  visualizations: VisualizationsState;
}

export const reducers: ActionReducerMap<VisualizationsState> = {
  graphs: fromGraphs.reducer
};

export const _selectVisualizationsFeature = createFeatureSelector<VisualizationsState>('visualizations');
export const _selectGraphs = createSelector(_selectVisualizationsFeature, state => state.graphs);

export const _selectGraphsData = createSelector(_selectGraphs, graphs => graphs.data);
export const _selectLatestId = createSelector(_selectGraphsData, data =>
  data.length ? data[data.length - 1].id : 0
);
export const _selectSpeedDataPoints = createSelector(_selectGraphsData, data =>
  data.map(item => <DataPoint>{
    name: item.date.toTimeString(),
    value: item.speed
  })
);
export const _selectSpeedGraphData = createSelector(_selectSpeedDataPoints, dataPoints =>
  <GraphData[]>[{
    name: 'Speed',
    series: dataPoints
  }]
);
export const _selectDistanceDataPoints = createSelector(_selectGraphsData, data =>
  data.map(item => <DataPoint>{
    name: item.date.toTimeString(),
    value: item.distance
  })
);
export const _selectDistanceGraphData = createSelector(_selectDistanceDataPoints, dataPoints =>
  <GraphData[]>[{
    name: 'Distance',
    series: dataPoints,
  }]
);

const visualizationsComponentSelectors = {
  latestId: _selectLatestId,
  speedGraph: _selectSpeedGraphData,
  distanceGraph: _selectDistanceGraphData
};

export default visualizationsComponentSelectors;
