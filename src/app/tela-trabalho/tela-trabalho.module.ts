import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaTrabalhoPage } from './tela-trabalho.page';

const routes: Routes = [
  {
    path: '',
    component: TelaTrabalhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaTrabalhoPage]
})
export class TelaTrabalhoPageModule {}
