import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';

@IonicPage()
@Component({
  selector: 'page-detalle-tarea',
  templateUrl: 'detalle-tarea.html',
})
export class DetalleTareaPage {
  private id:string;
  public tarea = [];
  

 
  constructor(public navCtrl: NavController, public navParams: NavParams,public tareaP : TareasProvider) {
    let item = this.navParams.get("id");
    this.id = item.id;
  }

  ionViewDidLoad() {
   this.cargarTareas(this.id)
  }

 cargarTareas(id){
    this.tareaP.getTareaById(id).subscribe(data => this.tarea= data);
  }
}
