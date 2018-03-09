import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import visualizationsComponentSelectors, { State } from './reducers';
import { ChartSettings, GraphData } from './models';

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
    autoScale: true
  };

  speedGraph$: Observable<GraphData[]>;
  distanceGraph$: Observable<GraphData[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.speedGraph$ = this.store.select(visualizationsComponentSelectors.speedGraph);
    this.distanceGraph$ = this.store.select(visualizationsComponentSelectors.distanceGraph);
  }
}
