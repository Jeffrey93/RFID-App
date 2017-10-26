import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTareasPage } from './lista-tareas';

@NgModule({
  declarations: [
    ListaTareasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTareasPage),
  ],
  exports: [
    ListaTareasPage
  ]
})
export class ListaTareasPageModule {}
