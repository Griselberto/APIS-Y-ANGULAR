from django.contrib import admin

# Register your models here.
from Universidad.Academica.models import Carrera,Estudiante,Curso,Matricula

admin.site.register(Carrera)
admin.site.register(Estudiante)
admin.site.register(Curso)
admin.site.register(Matricula)
