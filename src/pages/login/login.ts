import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
//import { Auth, User, UserDetails } from '@ionic/cloud-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  
  //details: UserDetails = {'email': 'hi@ionic.io', 'password': 'puppies123'};
  constructor(public navCtrl: NavController ) {
      
  }
  
 pushPage(){
   
   this.navCtrl.push(MenuPage);
 }

}