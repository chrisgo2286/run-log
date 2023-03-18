from django.urls import path, include
from .views import stats_view

urlpatterns = [
    path('stats/', stats_view),
]