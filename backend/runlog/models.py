
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Run(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(blank=False, null=False)
    distance = models.DecimalField(
        blank=False, 
        null=False, 
        max_digits=10, 
        decimal_places=2
    )
    time = models.IntegerField()
    comment = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.date:%m-%d-%Y} - {self.distance}KM'