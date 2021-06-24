import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MireportePageRoutingModule } from './mireporte-routing.module';

import { MireportePage } from './mireporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MireportePageRoutingModule
  ],
  declarations: [MireportePage]
})
export class MireportePageModule {}
