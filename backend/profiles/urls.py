from django.urls import path
from .views import stat_view

urlpatterns = [
    path('profile/', stat_view),
]