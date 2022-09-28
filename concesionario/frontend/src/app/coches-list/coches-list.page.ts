import { Component, OnInit } from '@angular/core';
import { CocheService } from '../services/coche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {

  coches:any = [ ]

  constructor(private cocheService: CocheService, private router: Router) { }

  ngOnInit() {
    this.getAllCoches();
  }

  ionViewDidEnter() {
    this.cocheService.getCoches().subscribe((response) => {
      this.coches = response;
    })
  }

  getAllCoches(){
    this.cocheService.getCoches().subscribe(response => {
      this.coches = response;
      
    })
  }

  removeCoche(coche, i) {
    if (window.confirm('¿Estas seguro de eliminar?')) {
      this.cocheService.deleteCoche(coche.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          this.getAllCoches();
          console.log('Dato eliminado!')
        }
      )
    }
  }


}
