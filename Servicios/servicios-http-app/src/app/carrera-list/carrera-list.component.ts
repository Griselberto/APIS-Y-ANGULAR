import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.css']
})
export class CarreraListComponent implements OnInit {
  Carrera: any=[]
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadCarreras()
  }
  loadCarreras() {
    return this.restApi.getCarreras().subscribe((data: {}) => {
      this.Carrera = data;
    })
  }
  eliminarCarrera(id:String) {
    if (window.confirm('Estás seguro que deseas elimianr?')){
      this.restApi.deleteCarrera(id).subscribe(data => {
        this.loadCarreras()
      })
    }
  } 

}
