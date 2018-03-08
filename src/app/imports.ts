import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { MetricsModule } from './features/metrics/metrics.module';
import { VisualizationsModule } from './features/visualizations/visualizations.module';
import { HomeModule } from './features/home/home.module';

import { reducers } from './reducers';
import { environment } from '../environments/environment';

const imports = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  StoreModule.forRoot(reducers),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  EffectsModule.forRoot([]),
  MetricsModule,
  VisualizationsModule,
  HomeModule
];

export default imports;
