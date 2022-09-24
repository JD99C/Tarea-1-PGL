import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {

  coches:any = [ ]
 

  constructor(private cocheService: CocheService, private router: Router) { }

  ngOnInit() {
    this.getAllCoches(); //Ejecuta el metodo mostrar todos los coches
  }
  //Mostrar todos los coches
  getAllCoches(){
    this.cocheService.getCoches().subscribe(response => {
      this.coches = response;
    })
  }

  ionViewDidEnter() {
    this.cocheService.getCoches().subscribe((response) => {
      this.coches = response;
    })
  }
  
  //Borrar Coche
  removeCoche(coche, i) {
    if (window.confirm('Are you sure')) {
      this.cocheService.deleteCoche(coche.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('User deleted!')
        }
      )
    }
  }

}
