import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetricsComponent } from './features/metrics/metrics.component';

const routes: Routes = [
  {
    path: 'metrics',
    component: MetricsComponent
  },
  {
    path: '**',
    redirectTo: 'metrics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
