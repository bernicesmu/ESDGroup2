from .models import Event
from rest_framework import serializer

class eventSerialiser(serializer.ModelSerializer):
    model= Event
    fields='__all__'