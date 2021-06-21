import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachesPageRoutingModule } from './baches-routing.module';

import { BachesPage } from './baches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachesPageRoutingModule
  ],
  declarations: [BachesPage]
})
export class BachesPageModule {}
