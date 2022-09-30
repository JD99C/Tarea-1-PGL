import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CochesCreatePage } from '../coches-create/coches-create.page';


@Injectable({
  providedIn: 'root'
})
export class CocheService {

  endpoint = 'http://localhost:8080/api/coches';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  //Get Coches
  getCoches(){
    return this.httpClient.get(this.endpoint);
  }
  //Post Coche
  createCoche(coche): Observable<any> {
    return this.httpClient.post(this.endpoint , JSON.stringify(coche), this.httpOptions)
  }

  updateCoche(id, coche): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(coche), this.httpOptions)
  }

  getCoche(id){
    return this.httpClient.get(this.endpoint + '/' + id)
  }

  //Delete Coche
  deleteCoche(id) {
    return this.httpClient.delete(this.endpoint + '/' + id, this.httpOptions)
  }

}
