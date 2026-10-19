from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Menu
#Create your views here

def home(request):
    return HttpResponse('Hello, World!')

def menu_by_id(request, menu_id):
    menu = Menu.objects.get(pk=menu_id)
    return HttpResponse(f"{menu.menu_item}: Type of {menu.cuisine} cuisine")


