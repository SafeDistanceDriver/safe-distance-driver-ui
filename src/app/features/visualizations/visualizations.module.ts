import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { VisualizationsComponent } from './visualizations.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';

import { reducers } from './reducers';

import { VisualizationsInitializationEffects } from './effects/initialization.effects';
import { GraphsEffects } from './effects/graphs.effects';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('visualizations', reducers),
    EffectsModule.forFeature([VisualizationsInitializationEffects, GraphsEffects]),
    NgxChartsModule
  ],
  declarations: [VisualizationsComponent, LineGraphComponent],
  providers: [ApiService]
})
export class VisualizationsModule { }
