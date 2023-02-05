from django.db import models
from django.contrib.auth.models import User

# Create your models here.

GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female')
)

PRIVACY_CHOICES = {
    ('Public', 'Public'),
    ('Private', 'Private')
}

class Profile(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    privacy = models.CharField(max_length=10, choices=PRIVACY_CHOICES, default='Private')
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default='Male')
    email = models.EmailField(max_length=100, blank=True, null=True)
    preference = models.TextField(blank=True, null=True) 
    history = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    @property
    def username(self):
        return self.owner.username

    def __str__(self):
        return f'{self.username} - Profile'