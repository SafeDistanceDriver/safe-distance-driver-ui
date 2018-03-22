import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGraphs from './graphs';
import { DataPoint, GraphData } from '../models';
import { formatDateToTime } from '../../../utils/dateHelper';

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
  data.length ? data[0].id : 0
);
export const _selectSpeedDataPoints = createSelector(_selectGraphsData, data =>
  data.map(item => <DataPoint>{
    name: formatDateToTime(item.time),
    value: item.speed
  })
);
export const _selectSpeedGraphData = createSelector(_selectSpeedDataPoints, dataPoints =>
  <GraphData[]>[{
    name: 'Speed',
    series: dataPoints.reverse()
  }]
);

export const _selectDistanceDataPoints = createSelector(_selectGraphsData, data =>
  data.map(item => <DataPoint>{
    name: formatDateToTime(item.time),
    value: item.distance
  })
);
export const _selectDistanceGraphData = createSelector(_selectDistanceDataPoints, dataPoints =>
  <GraphData[]>[{
    name: 'Distance',
    series: dataPoints.reverse(),
  }]
);

export const _selectRatingDataPoints = createSelector(_selectGraphsData, data =>
  data.map(item => <DataPoint>{
    name: formatDateToTime(item.time),
    value: item.rating
  })
);
export const _selectRatingGraphData = createSelector(_selectRatingDataPoints, dataPoints =>
  <GraphData[]>[{
    name: 'Rating',
    series: dataPoints.reverse(),
  }]
);
export const _selectRatingGaugeData = createSelector(_selectRatingDataPoints, dataPoints => <DataPoint[]>[dataPoints[0]]);

const visualizationsComponentSelectors = {
  latestId: _selectLatestId,
  speedGraph: _selectSpeedGraphData,
  distanceGraph: _selectDistanceGraphData,
  ratingGraph: _selectRatingGraphData,
  ratingGauge: _selectRatingGaugeData
};

export default visualizationsComponentSelectors;
