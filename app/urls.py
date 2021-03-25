from django.urls import path
from .views import inicio, contacto, Registro


urlpatterns = [
    path('', inicio, name = "inicio"),
    path('contacto/', contacto , name= "contacto"),
    path('Registro/', Registro , name= "Registro")
    
]
