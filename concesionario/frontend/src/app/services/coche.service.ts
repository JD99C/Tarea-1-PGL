import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CochesCreatePage } from '../coches-create/coches-create.page';

export class Coche {
  _id: number;
  matricula: string;
  marca: string;
  modelo: string;
  
}

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
  createCoche(coche: Coche): Observable<any> {
    return this.httpClient.post<Coche>(this.endpoint , JSON.stringify(coche), this.httpOptions).pipe(
      catchError(this.handleError<Coche>('Error occured'))
    );
  }

  updateCoche(id, coche: Coche): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(coche), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<Coche[]>('Update user'))
      );
  }

  getCoche(id): Observable<Coche[]> {
    return this.httpClient.get<Coche[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<Coche[]>(`Get user id=${id}`))
      );
  }

  //Delete Coche
  deleteCoche(id): Observable<Coche[]> {
    return this.httpClient.delete<Coche[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Dato eliminado: ${id}`)),
        catchError(this.handleError<Coche[]>('Dato eliminado'))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  



}
