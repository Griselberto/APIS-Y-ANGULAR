import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraCreateComponent } from './carrera-create/carrera-create.component';
import { EstudianteCreateComponent } from './estudiante-create/estudiante-create.component';
import { EstudianteEditComponent } from './estudiante-edit/estudiante-edit.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { CursoCreateComponent } from './curso-create/curso-create.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { MatriculaCreateComponent } from './matricula-create/matricula-create.component';
import { MatriculaEditComponent } from './matricula-edit/matricula-edit.component';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarreraListComponent,
    CarreraEditComponent,
    CarreraCreateComponent,
    EstudianteCreateComponent,
    EstudianteEditComponent,
    EstudianteListComponent,
    CursoCreateComponent,
    CursoEditComponent,
    CursoListComponent,
    MatriculaCreateComponent,
    MatriculaEditComponent,
    MatriculaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
