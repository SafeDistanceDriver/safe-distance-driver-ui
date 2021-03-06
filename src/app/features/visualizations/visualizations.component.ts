import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as graphsActions from './actions/graphs';
import visualizationsComponentSelectors, { State } from './reducers';
import { ChartSettings, GraphData, GaugeSettings, DataPoint } from './models';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';
import { curveCardinal } from 'd3-shape';

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss']
})
export class VisualizationsComponent implements OnInit {

  speedChartSettings: ChartSettings = {
    view: undefined,
    colorScheme: {
      domain: ['#0066ff']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: false,
    animations: false,
    yScaleMin: -5,
    yScaleMax: 65,
    curve: curveCardinal
  };

  distanceChartSettings: ChartSettings = {
    view: undefined,
    colorScheme: {
      domain: ['#ff6600']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: false,
    animations: false,
    yScaleMin: -50,
    yScaleMax: 550,
    curve: curveCardinal
  };

  ratingChartSettings: ChartSettings = {
    view: undefined,
    colorScheme: {
      domain: ['#4d0099']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: false,
    animations: false,
    yScaleMin: -10,
    yScaleMax: 110,
    curve: curveCardinal
  };

  ratingGaugeSettings: GaugeSettings = {
    view: undefined,
    colorScheme: {
      domain: ['#5AA454']
    },
    min: 0,
    max: 100,
    angleSpan: 240,
    startAngle: -120,
    units: 'Rating',
    bigSegments: 10,
    smallSegments: 5,
    animations: false
  };

  speedGraph$: Observable<GraphData[]>;
  distanceGraph$: Observable<GraphData[]>;
  ratingGraph$: Observable<GraphData[]>;
  ratingGauge$: Observable<DataPoint[]>;
  loadGraphDataSubscription$: Subscription;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.speedGraph$ = this.store.select(visualizationsComponentSelectors.speedGraph);
    this.distanceGraph$ = this.store.select(visualizationsComponentSelectors.distanceGraph);
    this.ratingGraph$ = this.store.select(visualizationsComponentSelectors.ratingGraph);
    this.ratingGauge$ = this.store.select(visualizationsComponentSelectors.ratingGauge);

    this.loadGraphDataSubscription$ = Observable.interval(500).do(() => {
      this.store.select(visualizationsComponentSelectors.latestId).subscribe(id =>
        this.store.dispatch(new graphsActions.LoadDataNewerThan(id)));
    }).subscribe();
  }
}
