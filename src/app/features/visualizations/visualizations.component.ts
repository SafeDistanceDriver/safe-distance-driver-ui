import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as graphsActions from './actions/graphs';
import visualizationsComponentSelectors, { State } from './reducers';
import { ChartSettings, GraphData } from './models';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss']
})
export class VisualizationsComponent implements OnInit {

  chartSettings: ChartSettings = {
    view: [700, 400],
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    autoScale: true,
    animations: true
  };

  latestId$: Observable<number>;
  speedGraph$: Observable<GraphData[]>;
  distanceGraph$: Observable<GraphData[]>;
  loadGraphDataSubscription$: Subscription;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.latestId$ = this.store.select(visualizationsComponentSelectors.latestId);
    this.speedGraph$ = this.store.select(visualizationsComponentSelectors.speedGraph);
    this.distanceGraph$ = this.store.select(visualizationsComponentSelectors.distanceGraph);
    this.loadGraphDataSubscription$ = Observable.interval(1000).do(
      () => this.store.dispatch(new graphsActions.LoadData())
    ).subscribe();
  }
}
