import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { MetricsModule } from './features/metrics/metrics.module';

import { reducers } from './reducers';
import { environment } from '../environments/environment';

const imports = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  StoreModule.forRoot(reducers),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  EffectsModule.forRoot([]),
  MetricsModule
];

export default imports;
