import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private alertController: AlertController) {}

  gotoCoches(){
    this.router.navigateByUrl("/coches-list")
  }

  gotoCreateCoches(){
    this.router.navigateByUrl("/coches-create")
  }



//Alerta de ayuda

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();
}
}