from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RunSerializer
from .models import Run
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .misc_scripts.month import Month
from django.contrib.auth.models import User

# Create your views here.

class RunView(viewsets.ModelViewSet):
    serializer_class = RunSerializer
    queryset = Run.objects.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        # if self.request.query_params.get('publicUser'):
        #     user = self.request.query_params.get('publicUser')
        #     # Check if user is public
        #     return self.queryset.filter(owner=user)
        return self.queryset.filter(owner=self.request.user)

@api_view(('GET',))
def calendar_view(request):
    cur_month = int(request.query_params['month'])
    cur_year = int(request.query_params['year'])
    month = Month(request.user, cur_month, cur_year)
    month.compile()
    return Response(month.days)

@api_view(('GET',))
def calendar_public_view(request):
    user = User.objects.get(id=request.query_params['user_id'])
    cur_month = int(request.query_params['month'])
    cur_year = int(request.query_params['year'])
    month = Month(user, cur_month, cur_year)
    month.compile()
    return Response(month.days)