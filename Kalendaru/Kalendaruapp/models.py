from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatar/')

class Tasks(models.Model):
    name = models.CharField(max_length=255)
    action = models.CharField(max_length=255)
    description = models.TextField()
    date_added = models.DateField()
    hascompleted = models.BooleanField()
    # user_join = models.ForeignKey("User", on_delete=models.CASCADE)

class Notes(models.Model):
    name = models.CharField(max_length=255)
    action = models.CharField(max_length=255)
    description = models.TextField()
    date_added = models.DateField()
    hasCompleated = models.BooleanField()
    # user_join = models.ForeignKey("User", on_delete=models.CASCADE)

class Actions(models.Model):
    name = models.CharField(max_length=255)
    actions = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    isofficial = models.BooleanField()
    iskalendaru = models.BooleanField()