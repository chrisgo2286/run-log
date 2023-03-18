from django.urls import path
from .views import search_profiles_view, stats_view

urlpatterns = [
    path('search/', search_profiles_view),
    path('stats/', stats_view),
]