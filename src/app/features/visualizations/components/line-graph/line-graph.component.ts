import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartSettings, GraphData } from '../../models';

@Component({
  selector: 'app-visualizations-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  @Input() title: string;
  @Input() settings: ChartSettings;
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  @Input() data: GraphData[];
  constructor() { }

  ngOnInit() { }
}
