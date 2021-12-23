import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraCreateComponent } from './carrera-create/carrera-create.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';

import { CursoCreateComponent } from './curso-create/curso-create.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursoListComponent } from './curso-list/curso-list.component';

import { EstudianteCreateComponent } from './estudiante-create/estudiante-create.component';
import { EstudianteEditComponent } from './estudiante-edit/estudiante-edit.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';

import { MatriculaCreateComponent } from './matricula-create/matricula-create.component';
import { MatriculaEditComponent } from './matricula-edit/matricula-edit.component';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crear-carrera' },

  { path: 'crear-carrera', component: CarreraCreateComponent },
  { path: 'editar-carrera/:id', component: CarreraEditComponent },
  { path: 'lista-producto', component: CarreraListComponent },

  { path: 'crear-curso', component: CursoCreateComponent },
  { path: 'editar-curso/:id', component: CursoEditComponent },
  { path: 'lista-curso', component: CursoListComponent },

  { path: 'crear-estudiante', component: EstudianteCreateComponent },
  { path: 'editar-estudiante/:id', component: EstudianteEditComponent },
  { path: 'lista-estudiante', component: EstudianteListComponent },

  { path: 'crear-matricula', component: MatriculaCreateComponent },
  { path: 'editar-matricula/:id', component: MatriculaEditComponent },
  { path: 'lista-matricula', component: MatriculaListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
