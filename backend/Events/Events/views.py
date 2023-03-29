from django.shortcuts import render, get_object_or_404
from .models import Event
from rest_framework import viewsets
from rest_framework.response import Response
from .serialiser import eventSerialiser
from .forms import getEventID




# Create your views here.

class eventViewset(viewsets.ModelViewSet):
    serializer_class=eventSerialiser
    queryset=Event.objects.all()
    
    # def get_queryset(self):
    #     eid = self.kwargs['id']
    #     return Event.objects.filter(id=eid)
    
    # def list(self, request):
    #     queryset = Event.objects.all()
    #     serializer = eventSerialiser(queryset, many=True)
    #     return Response(serializer.data)

# class getEvent(viewsets.ViewSet):
    
#     def retrieve(self, request, pk=None):
#         if request.method == 'GET':
#             queryset = Event.objects.filter(id=request)
#             serializer = eventSerialiser(queryset)
#             return Response(serializer.data)
    
# class getAllEvent(viewsets.ViewSet):
    
#     def retrieve(self, request, slug=None):
#         if request.method == 'GET':
#             queryset = Event.objects.all()
#             serializer = eventSerialiser(queryset, many=True)
#             return Response(serializer.data)
            
        # if request.method == 'POST':
        #     form = getEventID(request.POST)
        #     if form.is_valid():
        #         event_name = form.cleaned_data['event_name']
        #         queryset = Event.objects.filter(event_name=event_name)
        #         if queryset.exists():
        #             event = queryset.first()
        #             serializer = eventSerialiser(event)
        #             return render(request, 'event_details.html', {'event': serializer.data})
        #         else:
        #             return HttpResponse('Event not found')
        # else:
        #     form = getEventID()

        # return render(request, 'temporary.html', {'form': form})
    
    # def retrieve(self, request, pk=None):
    #     queryset = Event.objects.all()
    #     obj = get_object_or_404(queryset, slug=pk)    
    #     serializer = eventSerialiser(obj)
    #     return Response(serializer.data)
    
    # def my_view(request):
    #     if request.method == 'GET':
    #         url = request.GET.get('url')
    #         if url:
    #             response = requests.get(url)
    #             return render(request, 'temporary.html', {'response': response.text})
    #     return render(request, 'my_template.html')

    # serializer_class = eventSerialiser
    
    
    # def getEID(self, response):
    #     if response.method == "GET":
    #         queryset=Event.objects.get(eventName = response)
    #         serialiser = self.get_serializer_class()(queryset)
    #         return Response(serialiser.data)
        
    # def retrieve(self, request, pk=None):
    #     # Your code here
    #     queryset=Event.objects.get(eventName = request)
    #     if queryset:
    #         serialiser = self.get_serializer_class()(queryset)
    #         return Response(serialiser.data)
