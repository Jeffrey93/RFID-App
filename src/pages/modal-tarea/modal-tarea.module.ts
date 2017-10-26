import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTareaPage } from './modal-tarea';

@NgModule({
  declarations: [
    ModalTareaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTareaPage),
  ],
  exports: [
    ModalTareaPage
  ]
})
export class ModalTareaPageModule {}
