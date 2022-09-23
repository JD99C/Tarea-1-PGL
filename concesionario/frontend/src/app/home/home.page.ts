import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gotoCoches(){
    this.router.navigateByUrl("/coches-list")
  }

  gotoCreateCoches(){
    this.router.navigateByUrl("/coches-create")
  }

}
