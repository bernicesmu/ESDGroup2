from .models import Event
from rest_framework import serializers

class eventSerialiser(serializers.ModelSerializer):
    class Meta:
        model= Event
        fields='__all__'
