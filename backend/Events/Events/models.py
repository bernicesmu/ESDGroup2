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
    
e1 = Event(clubId = 1, eventName = "Datathon 2023", eventConfirmed= True, eventType= "I", eventLocation= "SMU Connexion Event Space Level 5", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e2 = Event(clubId = 6, eventName = "Voice Personality Hunt 2023", eventConfirmed= True, eventType= "A", eventLocation= "Ngee Ann Kong Si Auditorium", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e3 = Event(clubId = 1, eventName = "Networking Night 2023", eventConfirmed= True, eventType= "I", eventLocation= "Alcove", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e4 = Event(clubId = 4, eventName = "Friendly Match with NUS", eventConfirmed= True, eventType= "S", eventLocation= "Admin Building Multi Purpose Hall", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e5 = Event(clubId = 5, eventName = "Welfare Drive 2023", eventConfirmed= True, eventType= "O", eventLocation= "SOA GSR 2-5", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e6 = Event(clubId = 10, eventName = "National Debate Competition 2023", eventConfirmed= True, eventType= "O", eventLocation= "National Debate Competition 2023", eventDate= "2023-01-01", eventFromTime = "13:00:00", eventToTime = "20:00:00", eventSignUpForm = 'https://forms.gle/iitNdJiec8X4GqFK7')

e1.save()
e2.save()
e3.save()
e4.save()
e5.save()
e6.save()