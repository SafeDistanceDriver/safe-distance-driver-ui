import { Component, OnInit } from '@angular/core';
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

  data: GraphData[] = [{
    name: 'Speed',
    series: [
      {
        name: '1',
        value: 46
      },
      {
        name: '2',
        value: 45
      },
      {
        name: '3',
        value: 48
      },
      {
        name: '4',
        value: 50
      }
    ]
  }];

  constructor() { }

  ngOnInit() { }
}
