import { Component, OnInit ,Input  } from '@angular/core';

import { Router } from '@angular/router';
import { Carrera } from '../shared/carrera';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-carrera-create',
  templateUrl: './carrera-create.component.html',
  styleUrls: ['./carrera-create.component.css']
})
export class CarreraCreateComponent implements OnInit {
  @Input() carreraDetalle = { codigo: '', nombre: '', duracion: 0 }
  constructor(public restApi: RestApiService,
    public router: Router) {
  }
  ngOnInit(): void {
  }
  addCarrera() {
    this.restApi.createCarrera(this.carreraDetalle).subscribe((data: {}) => {
      this.router.navigate(['/lista-carrera'])
    })
  }

}
