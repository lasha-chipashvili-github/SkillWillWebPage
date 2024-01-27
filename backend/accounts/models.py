from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.core.validators import MinLengthValidator



class CustomUser(AbstractUser):
    email = models.EmailField(max_length=320, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
