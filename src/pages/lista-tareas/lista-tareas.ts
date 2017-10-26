import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TareasFinalizadasPage} from '../tareas-finalizadas/tareas-finalizadas';
import { TareasProvider } from '../../providers/tareas/tareas';
import { AlertController } from 'ionic-angular';
import {DetalleTareaPage} from '../detalle-tarea/detalle-tarea';

@IonicPage()
@Component({
  selector: 'page-lista-tareas',
  templateUrl: 'lista-tareas.html',
})
export class ListaTareasPage {
  
  public listaTareas = [];
   public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public tareaP : TareasProvider,
  private alertCtrl: AlertController) {
    
    this.cargarTareas(1);
  }
  


  ionViewDidLoad() {
   /*this.tareaP.getTareas().subscribe(tarea=>{
      //this.tareas.push(tarea);
     // console.log(tarea);
    });*/
    this.cargarTareas(1);

  }
  detalleTarea(id){
      this.navCtrl.push(DetalleTareaPage,{
      //id: item.id 
              id: id  
    });
  }
  cargarTareas(id){
    this.tareaP.getTareas(id).subscribe(data => this.listaTareas= data);
  }

  deleteTarea(index, tarea){
    this.finalizarConfirm(index,tarea);
    
  

  }
  
  finalizarConfirm(index,tarea) {
  let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Terminó esta tarea?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
         this.navCtrl.push(ListaTareasPage);
        }
      },
      {
        text: 'Sí',
        handler: () => {
        /*  this.navCtrl.push(TareasFinalizadasPage,{
      //id: item.id 
              id: id  
    });*/
    this.navCtrl.push(ListaTareasPage);
    let response;
    let off = 
      {
        "idEstado": 2,
        "titulo":tarea.titulo,
        "descripcion":tarea.descripcion,
        "fecha":tarea.fecha

      }
    
    this.tareaP.putTareas(tarea.id, off).subscribe(data => response= data);
     this.listaTareas.splice(index,1);
        console.log(response);
        }
      }
    ]
  });
  alert.present();
}
  /*deleteTarea(item){
    this.navCtrl.push(DetallePage,{
      id: item.id
    });
  }*/

}
