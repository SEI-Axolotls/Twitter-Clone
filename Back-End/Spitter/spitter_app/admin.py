from django.contrib import admin
from .models import Post, Comment, User_profile

# Register your models here.
admin.site.register(User_profile)
admin.site.register(Post)
admin.site.register(Comment)