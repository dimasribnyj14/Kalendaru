from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatar/')
    

class Tasks(models.Model):
    name = models.CharField(max_length=255,null=True,blank=True)
    action = models.CharField(max_length=255,null=True, blank=True, default=None)
    description = models.TextField(null=True,blank=True)
    date_added = models.DateField(null=True,blank=True)
    hascompleted = models.BooleanField(null=True,blank=True)
    user_join = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)

class Notes(models.Model):
    name = models.CharField(max_length=255)
    action = models.CharField(max_length=255)
    description = models.TextField()
    date_added = models.DateField()
    user_join = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)

class Actions(models.Model):
    name = models.CharField(max_length=255)
    actions = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    isofficial = models.BooleanField()
    iskalendaru = models.BooleanField()