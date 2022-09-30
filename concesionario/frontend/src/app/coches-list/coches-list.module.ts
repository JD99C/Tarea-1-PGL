import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CochesListPageRoutingModule } from './coches-list-routing.module';

import { CochesListPage } from './coches-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CochesListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CochesListPage]
})
export class CochesListPageModule {}
