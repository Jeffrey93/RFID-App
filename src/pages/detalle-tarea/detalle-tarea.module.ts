import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleTareaPage } from './detalle-tarea';

@NgModule({
  declarations: [
    DetalleTareaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleTareaPage),
  ],
  exports: [
    DetalleTareaPage
  ]
})
export class DetalleTareaPageModule {}
