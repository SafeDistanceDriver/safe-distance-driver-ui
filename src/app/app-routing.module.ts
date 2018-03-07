import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetricsComponent } from './features/metrics/metrics.component';
import { VisualizationsComponent } from './features/visualizations/visualizations.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'metrics',
    component: MetricsComponent
  },
  {
    path: 'visualizations',
    component: VisualizationsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
