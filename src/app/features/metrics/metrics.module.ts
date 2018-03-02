import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MetricsInitializationEffects } from './effects/initialization.effects';

import { MetricsComponent } from './metrics.component';
import { RatingComponent } from './components/rating/rating.component';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('metrics', reducers),
    EffectsModule.forFeature([MetricsInitializationEffects])
  ],
  declarations: [MetricsComponent, RatingComponent]
})
export class MetricsModule { }
