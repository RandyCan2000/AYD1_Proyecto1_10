import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachesPage } from './baches.page';

const routes: Routes = [
  {
    path: '',
    component: BachesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachesPageRoutingModule {}
