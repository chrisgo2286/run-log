from django.core.mail import send_mail
from django.conf import settings
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

def send_password_reset_link(email):
    """Sends password reset link to email"""
    user = find_user(email)
    token = generate_token(user)
    link = generate_link(token)
    msg = create_msg(link)

    send_mail(
        subject='Password Reset',
        message= msg,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email]
    )

def find_user(email):
    """Return user id for given email"""
    for user in User.objects.all():
        if user.email == email:
            return user

def generate_token(user):
    """Returns token for user"""
    return Token.objects.create(user=user)

def generate_link(token):
    """Returns link to page to provide new password"""
    return f'http://localhost:3000/api/accounts/password/change/{token}'

def create_msg(link):
    """Returns email message for password reset"""
    return f'Please click on the following link to reset your password: {link}'


