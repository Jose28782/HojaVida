import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecopilaPage } from './recopila.page';

const routes: Routes = [
  {
    path: '',
    component: RecopilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecopilaPageRoutingModule {}
