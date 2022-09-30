import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, private router: Router) {}

  gotoCoches(){
    this.router.navigateByUrl("/coches-list")
  }

  gotoCreateCoches(){
    this.router.navigateByUrl("/coches-create")
  }

  
}