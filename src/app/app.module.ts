import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';
import {ListaTareasPage} from '../pages/lista-tareas/lista-tareas';
import {TareasFinalizadasPage} from '../pages/tareas-finalizadas/tareas-finalizadas';
import { IonicStorageModule } from '@ionic/storage';
import {ModalTareaPage} from '../pages/modal-tarea/modal-tarea'
import { TareasProvider } from '../providers/tareas/tareas';
import { HttpModule } from '@angular/http';
import {DetalleTareaPage} from '../pages/detalle-tarea/detalle-tarea';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    ListaTareasPage,
    TareasFinalizadasPage,
    ModalTareaPage,
    DetalleTareaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
     name: '__mydb',
     driverOrder: ['indexeddb', 'sqlite', 'websql']
   })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    ListaTareasPage,
    TareasFinalizadasPage,
    ModalTareaPage,
    DetalleTareaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TareasProvider
  ]
})
export class AppModule {}
