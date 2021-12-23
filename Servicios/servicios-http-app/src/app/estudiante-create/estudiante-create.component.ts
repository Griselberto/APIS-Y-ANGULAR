import { Component, OnInit ,Input  } from '@angular/core';

import { Router } from '@angular/router';

import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  @Input() estudianteDetalle = { dni: '', apellidoPaterno: '', apellidoMaterno: '', nombres: '',fechaNacimiento: '', sexo: '', carrera: '' ,vigencia:true  }
  constructor(public restApi: RestApiService,
    public router: Router) {
  }
  ngOnInit(): void {
  }
  addEstudiante() {
    this.restApi.createEstudiante(this.estudianteDetalle).subscribe((data: {}) => {
      this.router.navigate(['/lista-estudiante'])
    })
  }

}
