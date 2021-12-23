import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  Curso: any=[]
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadCursos()
  }
  loadCursos() {
    return this.restApi.getCursos().subscribe((data: {}) => {
      this.Curso = data;
    })
  }
  eliminarCurso(id:String) {
    if (window.confirm('Estás seguro que deseas elimianr?')){
      this.restApi.deleteCurso(id).subscribe(data => {
        this.loadCursos()
      })
    }
  } 
}
