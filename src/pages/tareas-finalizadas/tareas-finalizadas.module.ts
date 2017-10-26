import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareasFinalizadasPage } from './tareas-finalizadas';

@NgModule({
  declarations: [
    TareasFinalizadasPage,
  ],
  imports: [
    IonicPageModule.forChild(TareasFinalizadasPage),
  ],
  exports: [
    TareasFinalizadasPage
  ]
})
export class TareasFinalizadasPageModule {}
