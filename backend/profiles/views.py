from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProfileSerializer
from .models import Profile
from .misc_scripts.profile_filter import ProfileFilter

# Create your views here.

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    
    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def list(self, request):
        queryset = Profile.objects.filter(owner=self.request.user)
        serializer = ProfileSerializer(queryset[0], many=True)
        return Response(serializer.data)
        
@api_view(('GET',))
def search_profiles_view(request):
    filter = ProfileFilter(**request.query_params)
    profiles = filter.filter_profiles()
    return Response(profiles)