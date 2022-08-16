from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class User_profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    profile_pic_url = models.CharField(max_length=150)
    bio = models.TextField()
    
    def __str__(self):
        return self.name


class Post(models.Model):
    user = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)

    def __str__(self):
        return self.body


class Comment(models.Model):
    user = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    body = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.body
