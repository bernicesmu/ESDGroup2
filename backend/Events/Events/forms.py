from django import forms

class getEventID(forms.Form):
    req_eventID = forms.CharField(max_length=255)