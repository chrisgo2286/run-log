from django.urls import path, include
from .views import calendar_view, calendar_public_view

urlpatterns = [
    path('calendar/', calendar_view),
    path('calendar_public/', calendar_public_view)
]