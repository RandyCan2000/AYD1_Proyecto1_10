import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelincuenciaPageRoutingModule } from './delincuencia-routing.module';

import { DelincuenciaPage } from './delincuencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelincuenciaPageRoutingModule
  ],
  declarations: [DelincuenciaPage]
})
export class DelincuenciaPageModule {}
