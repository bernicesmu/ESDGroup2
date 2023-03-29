# Generated by Django 4.1.7 on 2023-03-28 06:25

import Events.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clubName', models.CharField(max_length=255, validators=[Events.models.validate_notempty])),
                ('eventName', models.CharField(max_length=255, validators=[Events.models.validate_notempty])),
                ('eventConfirmed', models.BooleanField()),
                ('eventType', models.CharField(choices=[('S', 'SMU Sports Union'), ('G', 'Arts and Fraternity Club'), ('P', 'Institute of Innovation and Entrepreneurship'), ('M', 'Managerial Committee'), ('O', 'Other')], max_length=255)),
                ('eventLocation', models.CharField(max_length=255, validators=[Events.models.validate_notempty])),
                ('eventDate', models.DateField()),
                ('eventFromTime', models.TimeField()),
                ('eventToTime', models.TimeField(validators=[Events.models.validate_validtime])),
                ('eventSignUpForm', models.URLField(max_length=255, validators=[Events.models.validate_notempty])),
            ],
        ),
    ]
