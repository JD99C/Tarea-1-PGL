import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-update',
  templateUrl: './coches-update.page.html',
  styleUrls: ['./coches-update.page.scss'],
})
export class CochesUpdatePage implements OnInit {

  updateCocheFg: FormGroup;
  id: any;

  constructor(
    private CocheService: CocheService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchCoche(this.id);
    this.updateCocheFg = this.formBuilder.group({
      matricula: [''],
      marca: [''],
      modelo: ['']
    })
  }

  fetchCoche(id) {
    this.CocheService.getCoche(id).subscribe((data) => {
      this.updateCocheFg.setValue({
        matricula: data['matricula'],
        marca: data['marca'],
        modelo: data['modelo']
      });
    });
  }

  onSubmit() {
    if (!this.updateCocheFg.valid) {
      return false;
    } else {
      this.CocheService.updateCoche(this.id, this.updateCocheFg.value)
        .subscribe(() => {
          this.updateCocheFg.reset();
          this.router.navigate(['/coches-list']);
        })
    }
  }

}
