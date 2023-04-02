from django.core.mail import send_mail
from django.conf import settings

def send_password_reset_link(email):
    """Sends password reset link to email"""
    send_mail(
        subject='Password Reset',
        message='Please click the following link to reset your password: ',
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email]
    )