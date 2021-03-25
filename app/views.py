from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def inicio(request):
    return render(request,'app/inicio.html')
def contacto(request):
    return render(request,'app/contacto.html')

def Registro(request):
    return render(request,'app/Registro.html')
