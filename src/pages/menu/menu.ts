import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {ListaTareasPage} from '../lista-tareas/lista-tareas';
import {ModalTareaPage} from '../modal-tarea/modal-tarea';
import {TareasFinalizadasPage} from '../tareas-finalizadas/tareas-finalizadas';

@Component
({
    selector:'page-menu',
    templateUrl:'menu.html'
})
export class MenuPage{
     tarea = [
      {
        "id":3,
        "titulo":"Requerimientos",
        "descripcion":"requeirr usuario loren lorem lorem "
      },
      {
        "id":4,
        "titulo":"Encuentas app",
        "descripcion":"realizar desarrollo loren lorem lorem " 
      },
      {
        "id":5,
        "titulo":"Cliente contacto app",
        "descripcion":"realizar implementación loren lorem lorem " 
      }  
    ]
    constructor (public navCtrl: NavController,public modalCtrl: ModalController){

    }

    irTareasPendientes(){
        this.navCtrl.push(ListaTareasPage);
    }

     irTareasFinalizadas(){
    this.navCtrl.push(TareasFinalizadasPage,{
      //id: item.id 
      tarea: JSON.stringify (this.tarea)
       
    });
    
     }

    openModal(){
        let contactModal = this.modalCtrl.create(ModalTareaPage);
   contactModal.present();
    }
}