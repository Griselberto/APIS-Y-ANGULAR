import { Component, OnInit ,Input  } from '@angular/core';

import { Router } from '@angular/router';

import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-matricula-create',
  templateUrl: './matricula-create.component.html',
  styleUrls: ['./matricula-create.component.css']
})
export class MatriculaCreateComponent implements OnInit {

  @Input() matriculaDetalle = { estudiante: '', curso: '', fechaMatricula: ''}
  constructor(public restApi: RestApiService,
    public router: Router) {
  }
  ngOnInit(): void {
  }
  addMatricula() {
    this.restApi.createMatricula(this.matriculaDetalle).subscribe((data: {}) => {
      this.router.navigate(['/lista-curso'])
    })
  }
}
