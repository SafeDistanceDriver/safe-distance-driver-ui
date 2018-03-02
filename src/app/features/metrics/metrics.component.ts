import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import metricsComponentSelectors, { State } from './reducers';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  ratingMessage$: Observable<string>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.ratingMessage$ = this.store.select(metricsComponentSelectors.ratingMessage);
  }
}
