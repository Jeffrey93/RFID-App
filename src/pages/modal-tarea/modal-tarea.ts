import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';
import {MenuPage} from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-modal-tarea',
  templateUrl: 'modal-tarea.html',
})
export class ModalTareaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public tareaP: TareasProvider) {
  }
  tarea = {
    "titulo":"",
    "descripcion":"",
    "idEstado": 1,
    "fecha": "27/08/2017"

  }
    public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTareaPage');
  }
  AgregarTarea(tarea){
  let response;
      this.tareaP.postTareas(tarea).subscribe(data => response= data);

        alert("Tarea agregada correctamente");
        this.navCtrl.push(MenuPage);
}

  cerrarModal(){
    this.view.dismiss();
  }

}
