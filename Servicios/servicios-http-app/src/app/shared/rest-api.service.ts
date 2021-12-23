import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carrera } from '../shared/carrera';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://127.0.0.1:8000/apiadmin/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCarreras(): Observable<Carrera> {
    return this.http.get<Carrera>(this.apiURL + '/carreras/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  
  getCarrera(id: String): Observable<Carrera> {
    return this.http.get<Carrera>(this.apiURL + '/carreras/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createCarrera(carrera:any): Observable<Carrera> {
    return this.http.post<Carrera>(this.apiURL + '/carreras/', JSON.stringify(carrera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update producto
  updateCarrera(id: String, carrera:any): Observable<Carrera> {
    return this.http.put<Carrera>(this.apiURL + '/carreras/' + id, JSON.stringify(carrera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
    // HttpClient API delete() method => Delete employee
    deleteCarrera(id:String){
      return this.http.delete<Carrera>(this.apiURL + '/carreras/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
