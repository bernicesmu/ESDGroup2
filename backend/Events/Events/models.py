from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_notempty(field):
    if field == '':
        raise ValidationError(
            _('%(value)s is empty'),
            params={'%(field)s': field},
        )
        
def validate_validtime(start, end):
    if start > end:
        raise ValidationError(
            _('%(end)s is cannot be before %(start)s'),
            params={'%(start)s': start, '%(end)s': end},
        )

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
    SSU = 'S'
    ACF = 'A'
    IIE = 'I'
    MC = 'M'
    OTHER = 'O'
    EVENT_TYPE_CHOICES = [
        (SSU, 'SMU Sports Union'),
        (ACF, 'Arts and Fraternity Club'),
        (IIE, 'Institute of Innovation and Entrepreneurship'),
        (MC, 'Managerial Committee'),
        (OTHER, 'Other'),
    ]
    
    clubId=models.CharField(max_length=255, validators=[validate_notempty])
    eventName=models.CharField(max_length=255, validators=[validate_notempty])
    eventConfirmed=models.BooleanField()
    eventType=models.CharField(max_length=255, choices=EVENT_TYPE_CHOICES)
    eventLocation=models.CharField(max_length=255, validators=[validate_notempty])
    eventDate=models.DateField()
    eventFromTime=models.TimeField()
    eventToTime=models.TimeField()
    eventSignUpForm=models.URLField(max_length=255, validators=[validate_notempty])

    validate_validtime(eventFromTime, eventToTime)

    def __str__(self):
        return self.eventName
    
