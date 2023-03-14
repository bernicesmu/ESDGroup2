from django.db import models

class event(models.Model):
    clubName=models.CharField(max_length=255),
    eventName=models.CharField(max_length=255),
    eventConfirmed=True, 
    eventType=models.CharField(max_length=255),
    eventLocation=models.CharField(max_length=255),
    eventDate: "01-01-23",
    eventFromTime: "x", 
    eventToTime: "x", 
    eventSignUpForm: "",