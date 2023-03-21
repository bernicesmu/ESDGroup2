from django.db import models

# Create your models here.
"""
    clubName: "SMUBIA",
    eventName: "",
    eventConfirmed: true, 
    eventType: "",
    eventLocation: "",
    eventDate: "01-01-23",
    eventFromTime: "x", 
    eventToTime: "x", 
    eventSignUpForm: "",
"""
class Event(models.Model):
    clubName=models.CharField(max_length=255)
    eventName=models.CharField(max_length=255)
    eventConfirmed=models.BooleanField()
    eventType=models.CharField(max_length=255)
    eventLocation=models.CharField(max_length=255)
    eventDate=models.DateField()
    eventFromTime=models.DateTimeField()
    eventToTime=models.DateTimeField()
    eventSignUpForm=models.CharField(max_length=255)
    
    def __str__(self):
        return self.eventName