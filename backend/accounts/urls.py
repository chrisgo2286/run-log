from django.urls import path, include
from .views import password_reset_view

app_name = 'accounts'

urlpatterns = [
    path('password-reset/', password_reset_view),
    path('registration/', include('dj_rest_auth.registration.urls')),
]