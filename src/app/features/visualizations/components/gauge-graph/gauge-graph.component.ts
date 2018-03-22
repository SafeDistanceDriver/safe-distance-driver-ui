import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GaugeSettings, DataPoint } from '../../models';

@Component({
  selector: 'app-visualizations-gauge-graph',
  templateUrl: './gauge-graph.component.html',
  styleUrls: ['./gauge-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaugeGraphComponent implements OnInit {

  @Input() title: string;
  @Input() settings: GaugeSettings;
  @Input() data: DataPoint[];
  constructor() { }

  ngOnInit() { }
}
