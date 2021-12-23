import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrls: ['./matricula-list.component.css']
})
export class MatriculaListComponent implements OnInit {
  Matricula: any=[]
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadMatriculas()
  }
  loadMatriculas() {
    return this.restApi.getMatriculas().subscribe((data: {}) => {
      this.Matricula = data;
    })
  }
  eliminarMatricula(id:number) {
    if (window.confirm('Estás seguro que deseas elimianr?')){
      this.restApi.deleteMatricula(id).subscribe(data => {
        this.loadMatriculas()
      })
    }
  } 

}
