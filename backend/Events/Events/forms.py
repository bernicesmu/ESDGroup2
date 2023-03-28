from django import forms

def clean_my_time(self):
    start = self.cleaned_data['eventFromTime']
    end = self.cleaned_data['eventToTIme']
    
    if start > end:
        raise forms.ValidationError('End time must be after the start time')
    return data

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_even(field):
    if field == '':
        raise ValidationError(
            _('%(value)s is empty'),
            params={'%(field)s': field},
        )