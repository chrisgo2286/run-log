# Generated by Django 4.1.1 on 2023-02-06 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_profile_privacy'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='privacy',
            field=models.CharField(choices=[('Public', 'Public'), ('Private', 'Private')], default='Private', max_length=10),
        ),
    ]