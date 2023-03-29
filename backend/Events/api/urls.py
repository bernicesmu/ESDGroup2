"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Events.views import eventViewset

router=DefaultRouter()

router.register(r'eventList', eventViewset)
# router.register(r'getEvent', getEvent, basename='getEvent')
# router.register(r'AllEvents', getAllEvent, basename='allEvents')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    # path('getEvent/', getEvent.as_view({'get':'retrieve'}), name='getEvent'),
    # path('getAllEvent/', getAllEvent.as_view({'get':'retrieve'}), name='getAllEvent')
]
