import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';

@IonicPage()
@Component({
  selector: 'page-tareas-finalizadas',
  templateUrl: 'tareas-finalizadas.html',
})
export class TareasFinalizadasPage {

 
  tareasFinalizadas =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public tareaP : TareasProvider) {
    console.log(navParams.get('tarea'));
    // this.tareaFinalizada = Array.of (navParams.get('tarea'));
  }
  
  ionViewDidLoad() {
    this.listar();
  }
listar(){
  //console.log(this.tareaFinalizada);
  this.tareaP.getAllTareas().subscribe(data => this.tareasFinalizadas = data);
}

}
