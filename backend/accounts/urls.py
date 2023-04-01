from django.urls import path, include
from .views import password_reset_view

app_name = 'accounts'

urlpatterns = [
    path('password-reset/', password_reset_view),
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
]