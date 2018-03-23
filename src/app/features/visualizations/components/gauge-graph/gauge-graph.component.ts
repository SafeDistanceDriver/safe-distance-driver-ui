import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GaugeSettings, DataPoint } from '../../models';

@Component({
  selector: 'app-visualizations-gauge-graph',
  templateUrl: './gauge-graph.component.html',
  styleUrls: ['./gauge-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaugeGraphComponent implements OnInit {

  @Input() settings: GaugeSettings;
  @Input() data: DataPoint[];
  constructor() { }

  ngOnInit() { }

  getRatingColor(): string[] {
    if (this.data) {
      const rating = this.data[0].value;
      if (rating > 50) {
        return [GREEN];
      } else if (rating > 25) {
        return [YELLOW];
      } else {
        return [RED];
      }
    }
    return [GREEN];
  }
}

const GREEN = '#5AA454';
const RED = '#A10A28';
const YELLOW = '#C7B42C';
