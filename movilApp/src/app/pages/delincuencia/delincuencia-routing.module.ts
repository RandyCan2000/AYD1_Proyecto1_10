import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelincuenciaPage } from './delincuencia.page';

const routes: Routes = [
  {
    path: '',
    component: DelincuenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelincuenciaPageRoutingModule {}
