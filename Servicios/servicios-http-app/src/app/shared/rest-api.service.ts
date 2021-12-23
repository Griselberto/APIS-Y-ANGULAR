import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Carrera } from '../shared/carrera';
import { Curso } from '../shared/curso';
import { Estudiante } from '../shared/estudiante';
import { Matricula } from '../shared/matricula';

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
    return this.http.get<Carrera>(this.apiURL + 'carreras/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  
  getCarrera(id: String): Observable<Carrera> {
    return this.http.get<Carrera>(this.apiURL + 'carreras/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createCarrera(carrera:any): Observable<Carrera> {
    return this.http.post<Carrera>(this.apiURL + 'carreras/', JSON.stringify(carrera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update producto
  updateCarrera(id: String, carrera:any): Observable<Carrera> {
    return this.http.put<Carrera>(this.apiURL + 'carreras/' + id, JSON.stringify(carrera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
    // HttpClient API delete() method => Delete employee
    deleteCarrera(id:String){
      return this.http.delete<Carrera>(this.apiURL + 'carreras/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    getCursos(): Observable<Curso> {
      return this.http.get<Curso>(this.apiURL + 'cursos/')
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
    
    getCurso(id: String): Observable<Curso> {
      return this.http.get<Curso>(this.apiURL + 'cursos/' + id)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
  
    createCurso(curso:any): Observable<Curso> {
      return this.http.post<Curso>(this.apiURL + 'cursos/', JSON.stringify(curso), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
  
    // HttpClient API put() method => Update producto
    updateCurso(id: String, curso:any): Observable<Curso> {
      return this.http.put<Curso>(this.apiURL + 'cursos/' + id, JSON.stringify(curso), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
      // HttpClient API delete() method => Delete employee
    deleteCurso(id:String){
        return this.http.delete<Curso>(this.apiURL + 'cursos/' + id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
      }

      getEstudiantes(): Observable<Estudiante> {
        return this.http.get<Estudiante>(this.apiURL + 'estudiantes/')
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
      }
      
      getEstudiante(id: String): Observable<Estudiante> {
        return this.http.get<Estudiante>(this.apiURL + 'estudiantes/' + id)
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
      }
    
      createEstudiante(curso:any): Observable<Estudiante> {
        return this.http.post<Estudiante>(this.apiURL + 'estudiantes/', JSON.stringify(curso), this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
      }
    
      // HttpClient API put() method => Update producto
      updateEstudiante(id: String, curso:any): Observable<Estudiante> {
        return this.http.put<Estudiante>(this.apiURL + 'estudiantes/' + id, JSON.stringify(curso), this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
      }
        // HttpClient API delete() method => Delete employee
        deleteEstudiante(id:String){
          return this.http.delete<Estudiante>(this.apiURL + 'estudiantes/' + id, this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
        }
  
        getMatriculas(): Observable<Matricula> {
          return this.http.get<Matricula>(this.apiURL + 'matriculas/')
            .pipe(
              retry(1),
              catchError(this.handleError)
            )
        }
        
        getMatricula(id: number): Observable<Matricula> {
          return this.http.get<Matricula>(this.apiURL + 'matriculas/' + id)
            .pipe(
              retry(1),
              catchError(this.handleError)
            )
        }
      
        createMatricula(curso:any): Observable<Matricula> {
          return this.http.post<Matricula>(this.apiURL + 'matriculas/', JSON.stringify(curso), this.httpOptions)
            .pipe(
              retry(1),
              catchError(this.handleError)
            )
        }
      
        // HttpClient API put() method => Update producto
        updateMatricula(id: number, curso:any): Observable<Matricula> {
          return this.http.put<Matricula>(this.apiURL + 'matriculas/' + id, JSON.stringify(curso), this.httpOptions)
            .pipe(
              retry(1),
              catchError(this.handleError)
            )
        }
          // HttpClient API delete() method => Delete employee
          deleteMatricula(id:number){
            return this.http.delete<Matricula>(this.apiURL + 'matriculas/' + id, this.httpOptions)
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
