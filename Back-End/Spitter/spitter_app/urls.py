from django.urls import path
from .views import AllPost_ViewSet, OnePost_ViewSet, Comment_ViewSet, UserProfile_ViewSet

urlpatterns = [
    path('posts', AllPost_ViewSet.as_view()),
    path('posts/<int:id>', OnePost_ViewSet.as_view()),
    path('posts/<int:id>/comments', Comment_ViewSet.as_view()),
    path('user/profile/<int:id>, ', UserProfile_ViewSet.as_view())
]
