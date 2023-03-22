from .models import Event
from rest_framework import serializers

class eventSerialiser(serializers.ModelSerializer):
    model= Event
    fields='__all__'