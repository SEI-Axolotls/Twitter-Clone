from rest_framework import viewsets
from .models import User_profile, Comment, Post
from rest_framework.views import APIView
from .serializers import User_profileSerializer, Comment_Serializer, Post_Serializer
from rest_framework import permissions
from rest_framework.response import Response
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

    def get(self, request):
        try:
            results = Post.object.all()
            all_post = Post_Serializer(results, many=True)
            return Response(all_post.data)
        except:
            return Response({'error': "Something went wrong"})


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

    # added this on 8/15; think we needed GET functionality on the comments to display them but still not working

    # def getComments(self, request, id):
    #     try:
    #         comment_results = Comment.object.filter(post_id=id)
    #         all_comment = Comment_Serializer(comment_results, many=True)
    #         return Response(all_comment.data)
    #     except:
    #         return Response({'error': "Something went wrong"})


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
