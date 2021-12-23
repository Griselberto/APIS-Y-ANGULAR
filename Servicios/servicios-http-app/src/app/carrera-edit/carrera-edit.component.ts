import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-carrera-edit',
  templateUrl: './carrera-edit.component.html',
  styleUrls: ['./carrera-edit.component.css']
})
export class CarreraEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['codigo'];
  carreraData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() { 
    this.restApi.getCarrera(this.id).subscribe((data: {}) => {
      this.carreraData = data;
    })
  }
    // Actualizar producto
    actualizaCarrera() {
      if(window.confirm('Estás seguro de actualizar el producto?')){
        this.restApi.updateCarrera(this.id, this.carreraData).subscribe(data => {
          this.router.navigate(['/lista-carrera'])
        })
      }
    }


}
