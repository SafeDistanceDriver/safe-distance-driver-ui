import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { VisualizationsComponent } from './visualizations.component';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('visualizations', reducers),
    EffectsModule.forFeature([])
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
