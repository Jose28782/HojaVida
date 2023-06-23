import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecopilaPageRoutingModule } from './recopila-routing.module';

import { RecopilaPage } from './recopila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecopilaPageRoutingModule
  ],
  declarations: [RecopilaPage]
})
export class RecopilaPageModule {}
