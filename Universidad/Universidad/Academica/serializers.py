from rest_framework import serializers
from rest_framework.reverse import reverse
from Universidad.Academica.models import Carrera,Estudiante,Curso,Matricula

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = ('codigo','nombre','duracion',)

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Estudiante 
        fields=('dni','apellidoPaterno','apellidoMaterno','nombres',
        'fechaNacimiento','sexo','carrera','vigencia')
class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ('codigo','nombre','creditos','docente')

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Matricula 
        fields=('estudiante','curso','fechaMatricula')