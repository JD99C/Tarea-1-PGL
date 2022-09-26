import { Component, OnInit } from '@angular/core';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {

  coches:any = [ ]

  constructor(private cocheService: CocheService) { }

  ngOnInit() {
    this.getAllCoches();
  }

  getAllCoches(){
    this.cocheService.getCoches().subscribe(response => {
      this.coches = response;
    })
  }

}
