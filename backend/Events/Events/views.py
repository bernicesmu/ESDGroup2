from django.shortcuts import render
from .models import Event
from rest_framework import viewsets
from .serialiser import eventSerialiser

# Create your views here.

class eventViewset(viewsets.ModelViewset):
    serializer=eventSerialiser
    queryset=Event.objects.all()