from django.urls import path, include
from .views import calendar_view

urlpatterns = [
    path('calendar/', calendar_view),
]