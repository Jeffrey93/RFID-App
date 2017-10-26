import { Component, ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';
import {DetalleTareaPage} from '../pages/detalle-tarea/detalle-tarea';
import {ListaTareasPage} from '../pages/lista-tareas/lista-tareas';
import {TareasFinalizadasPage} from '../pages/tareas-finalizadas/tareas-finalizadas';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;
  pages: Array<{title: string, component: any}>;
 @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

       this.pages = [
      { title: 'Inicio', component: MenuPage },
      { title: 'Pendientes', component: ListaTareasPage },
      { title: 'Finalizadas', component: TareasFinalizadasPage },
      { title: 'Cambiar contraseña', component: MenuPage },
      { title: 'Cerrar sesión', component: LoginPage },
    ];
      
    });
  }
openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

//listado de paginas



  cerrarSesion(){
    let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Terminó esta tarea?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Sí',
        handler: () => {
     return 
    
        }
      }
    ]
  });
  alert.present();
  }
}

