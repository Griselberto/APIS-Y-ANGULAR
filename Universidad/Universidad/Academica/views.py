from django.shortcuts import render
# Create your views here.
from rest_framework import status
from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from Universidad.Academica.models import Carrera,Estudiante,Curso,Matricula
from Universidad.Academica.serializers import CarreraSerializer,EstudianteSerializer,CursoSerializer,MatriculaSerializer

@api_view(['GET', 'POST'])
def lista_carreras(request):
    """
    Lista de todos las carreras creados
    """
    if request.method == 'GET':
        carreras = Carrera.objects.all()
        serializer = CarreraSerializer(carreras, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CarreraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def carrera_detalle(request, pk):
    """
    Recupera, una carrera para eliminar o actualizar
    """
    try:
        carrera = Carrera.objects.get(pk=pk)
    except Carrera.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CarreraSerializer(carrera)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CarreraSerializer(carrera, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        carrera.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def lista_estudiantes(request):
    """
    Lista de todos los estudiantes creados
    """
    if request.method == 'GET':
        estudiantes = Estudiante.objects.all()
        serializer = EstudianteSerializer(estudiantes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EstudianteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def estudiante_detalles(request, pk):
    """
    Recupera, un estudiante para eliminar o actualizar
    """
    try:
        estudiante = Estudiante.objects.get(pk=pk)
    except Carrera.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EstudianteSerializer(estudiante)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EstudianteSerializer(estudiante, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        estudiante.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def lista_cursos(request):
    """
    Lista de todos los cursos creados
    """
    if request.method == 'GET':
        cursos = Curso.objects.all()
        serializer = CursoSerializer(cursos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CursoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def curso_detalle(request, pk):
    """
    Recupera, un curso para eliminar o actualizar
    """
    try:
        curso = Curso.objects.get(pk=pk)
    except Carrera.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CursoSerializer(curso)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CursoSerializer(curso, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        curso.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def lista_matriculas(request):
    """
    Lista de todos las matriculas creados
    """
    if request.method == 'GET':
        matriculas = Matricula.objects.all()
        serializer = MatriculaSerializer(matriculas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MatriculaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def matricula_detalles(request, pk):
    """
    Recupera, una carrera para eliminar o actualizar
    """
    try:
        matricula = Matricula.objects.get(pk=pk)
    except Carrera.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MatriculaSerializer(matricula)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MatriculaSerializer(matricula, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        matricula.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
