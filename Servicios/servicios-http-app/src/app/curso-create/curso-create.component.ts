import { Component, OnInit ,Input  } from '@angular/core';

import { Router } from '@angular/router';

import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {
  @Input() cursoDetalle = { codigo: '', nombre: '', creditos: 0, docente: '' }
  constructor(public restApi: RestApiService,
    public router: Router) {
  }
  ngOnInit(): void {
  }
  addCurso() {
    this.restApi.createCurso(this.cursoDetalle).subscribe((data: {}) => {
      this.router.navigate(['/lista-curso'])
    })
  }


}
