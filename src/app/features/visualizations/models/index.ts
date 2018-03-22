export interface ApiResponse {
  id: number;
  time: string;
  distance: number;
  speed: number;
  rating: number;
}

export interface DataPoint {
  name: string;
  value: number;
}

export interface GraphData {
  name: string;
  series: DataPoint[];
}

export interface ChartSettings {
  view: [number, number] | undefined;
  colorScheme: {
    domain: string[]
  };
  gradient: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showLegend: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  autoScale: boolean;
  animations: boolean;
  yScaleMin: number;
  yScaleMax: number;
  curve: any;
}

export interface GaugeSettings {
  view: [number, number] | undefined;
  colorScheme: {
    domain: string[]
  };
  min: number;
  max: number;
  angleSpan: number;
  startAngle: number;
  units: string;
  bigSegments: number;
  smallSegments: number;
}
