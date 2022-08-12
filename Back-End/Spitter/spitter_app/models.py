from django.db import models

# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=25)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)


    def __str__(self):
        return self.author

class Comment(models.Model):
    author = models.CharField(max_length=25)
    body = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return self.author
