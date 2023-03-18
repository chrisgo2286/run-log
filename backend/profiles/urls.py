from django.urls import path
from .views import search_profiles_view

urlpatterns = [
    path('search/', search_profiles_view),
]