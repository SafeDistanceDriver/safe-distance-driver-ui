import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as graphsActions from './actions/graphs';
import visualizationsComponentSelectors, { State } from './reducers';
import { ChartSettings, GraphData } from './models';
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
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: false,
    animations: true,
    yScaleMin: 0,
    yScaleMax: 60,
    curve: curveCardinal
  };

  distanceChartSettings: ChartSettings = {
    view: undefined,
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: false,
    animations: false,
    yScaleMin: 0,
    yScaleMax: 500,
    curve: curveCardinal
  };

  speedGraph$: Observable<GraphData[]>;
  distanceGraph$: Observable<GraphData[]>;
  loadGraphDataSubscription$: Subscription;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.speedGraph$ = this.store.select(visualizationsComponentSelectors.speedGraph);
    this.distanceGraph$ = this.store.select(visualizationsComponentSelectors.distanceGraph);

    this.loadGraphDataSubscription$ = Observable.interval(500).do(() => {
      this.store.select(visualizationsComponentSelectors.latestId).subscribe(id =>
        this.store.dispatch(new graphsActions.LoadDataNewerThan(id)));
    }).subscribe();
  }
}
