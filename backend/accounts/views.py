from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .misc.misc_funcs import send_password_reset_link

@api_view(('GET',))
def password_reset_view(request):
    """View to check if email exists for user and sends password reset link"""
    email = request.query_params['email']
    match = User.objects.filter(email=email)
    if match:
        send_password_reset_link(email)
        content = {'msg': 'Please check your email for link!'}
        return Response(content, status=status.HTTP_200_OK)    
    content = { 'msg': 'Email not found!' }
    return Response(content, status=status.HTTP_200_OK)
