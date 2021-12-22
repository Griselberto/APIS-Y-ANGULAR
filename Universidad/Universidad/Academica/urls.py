from django.urls import path, include

from rest_framework import routers
from Universidad.Academica.views import lista_carreras,carrera_detalle,lista_estudiantes,estudiante_detalles
from Universidad.Academica.views import lista_cursos,curso_detalle,lista_matriculas,matricula_detalles

router = routers.DefaultRouter()
urlpatterns = [
    path('carrera/', include(router.urls)),
    path('carreras/', lista_carreras),
    path('carreras/<pk>', carrera_detalle),

    path('estudiante/', include(router.urls)),
    path('estudiantes/', lista_estudiantes),
    path('estudiantes/<pk>', estudiante_detalles),

    path('curso/', include(router.urls)),
    path('cursos/', lista_cursos),
    path('cursos/<pk>', curso_detalle),

    path('matricula/', include(router.urls)),
    path('matriculas/', lista_matriculas),
    path('matriculas/<pk>', matricula_detalles),
]

