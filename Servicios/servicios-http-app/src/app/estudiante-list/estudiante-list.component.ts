import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
  Estudiante: any=[]
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadEstudiantes()
  }
  loadEstudiantes() {
    return this.restApi.getEstudiantes().subscribe((data: {}) => {
      this.Estudiante = data;
    })
  }
  eliminarEstudiante(id:String) {
    if (window.confirm('Estás seguro que deseas elimianr?')){
      this.restApi.deleteEstudiante(id).subscribe(data => {
        this.loadEstudiantes()
      })
    }
  } 
}
