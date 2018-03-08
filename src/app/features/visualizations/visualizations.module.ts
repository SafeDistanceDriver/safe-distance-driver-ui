import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { VisualizationsComponent } from './visualizations.component';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('visualizations', reducers),
    EffectsModule.forFeature([]),
    NgxChartsModule
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
