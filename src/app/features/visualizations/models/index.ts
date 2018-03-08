export interface ApiResponse {
  id: number;
  date: Date;
  distance: number;
  speed: number;
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
}
