import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CocheService } from '../services/coche.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-coches-create',
  templateUrl: './coches-create.page.html',
  styleUrls: ['./coches-create.page.scss'],
})
export class CochesCreatePage implements OnInit {

  
  cocheForm : FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private cocheService: CocheService,
    private toastControl: ToastController  
  ) { 
    this.cocheForm = this.formBuilder.group({
      matricula: [''],
      marca: [''],
      modelo: [''],
      
    })
  }

  ngOnInit() { }

  

 onSubmit(){
  if(!this.cocheForm.valid){
    return false;
  }else{
    this.cocheService.createCoche(this.cocheForm.value)
    .subscribe((response) =>{
      this.zone.run(() => {
        this.cocheForm.reset();
        this.router.navigate(['/coches-list'])
      })
    });
  }
 }
  
  }
