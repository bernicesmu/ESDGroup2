from django.shortcuts import render
from .models import Event
from rest_framework import viewsets
from .serialiser import eventSerialiser

# Create your views here.

class eventViewset(viewsets.ModelViewSet):
    serializer_class=eventSerialiser
    queryset=Event.objects.all()