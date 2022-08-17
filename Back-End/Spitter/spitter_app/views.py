from ast import Delete
from operator import imod
from unicodedata import name
from rest_framework import viewsets
from .models import User_profile, Comment, Post
from rest_framework.views import APIView
from .serializers import User_profileSerializer, Comment_Serializer, Post_Serializer
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
# Create your views here.


class UserProfile_ViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    serializer_class = User_profileSerializer


class Comment_ViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = Comment_Serializer


class Post_ViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = Post_Serializer


class AllPost_ViewSet(APIView):
    permission_classes = [
        permissions.AllowAny
    ] 

    def get(self, request):
        try:
            results = Post.objects.all()
            all_post = Post_Serializer(results, many=True)
            return Response(all_post.data)
        except:
            return Response({'error': "Something went wrong"})

    def post(self, request):
        try:
            user = self.request.user
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                title = request.data['title']
                body = request.data['body']
                userProfile = User_profile.objects.get(user=user)
                Post.objects.create(user=userProfile, title=title, body=body)
                return Response({'message': "Post Successfully Created!!"})
            else:
                return Response({'error': "Not Authenticated make sure you include a token"})
        except:
            return Response({'error': "Error: Invalid Body"})

class OnePost_ViewSet(APIView):
    permission_classes = [
        permissions.AllowAny
    ]

    def get(self, request, id):
        try:
            post_results = Post.objects.get(id=id)
            post = Post_Serializer(post_results)
            comments_results = Comment.objects.filter(post_id=id)
            comments = Comment_Serializer(comments_results, many=True)
            return Response({'post': post.data, 'comments': comments.data})
        except:
            return Response({'error': "Something went wrong"})

    def put(self, request, id):
        try:
            user = self.request.user
            print(user)
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                title = request.data['title']
                body = request.data['body']
                # Grabs authenticated User Name
                Profile = User_profile.objects.get(user=user)
                Posts = Post.objects.get(id=id)
                userProfile = Profile.user_id
                userPost = Posts.user_id
                print(userProfile)
                print(userPost)
                # userPost = Post.objects.get(id=id)
                # print(userPost)
                if userPost == userProfile:
                    Post.objects.update(title=title, body=body)
                    return Response({'message': "Post Successfully Updated!!"})
                else:
                    return Response({'message': "You are not authorized to perform this action"})
            else:
                return Response({'error': "Not Authenticated make sure you include a token"})
        except:
            return Response({'error': "Error: Invalid Body"})

    def delete(self, request, id):
        try:
            user = self.request.user
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                userProfile = User_profile.objects.get(user=user)
                if userProfile == id:
                    Post.objects.delete()
                return Response({'message': "Post Successfully Deleted!!"})
            else:
                return Response({'error': "Not Authenticated make sure you include a token"})
        except:
            return Response({'error': "Error: Invalid Body"})

class Comment_ViewSet(APIView):
    permission_classes = [
        permissions.AllowAny
    ]

    def post(self, request, id):
        try:
            user = self.request.user
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                body = request.data['body']
                userProfile = User_profile.objects.get(user=user)
                post = Post.objects.get(id=id)
                Comment.objects.create(
                    user=userProfile, body=body, post=post)
                return Response({'message': "Comment Successfully Created!!"})
            else:
                return Response({'error': "Not Authenticated. Check token!!"})
        except:
            return Response({'error': "Invalid Body!!"})