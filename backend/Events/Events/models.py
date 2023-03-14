from django.db import models

class event(models.Model):
    clubName=models.CharField(max_length=255),
    eventName=models.CharField(max_length=255),
    eventConfirmed=True, 
    eventType: "",
    eventLocation: "",
    eventDate: "01-01-23",
    eventFromTime: "x", 
    eventToTime: "x", 
    eventSignUpForm: "",