from rest_framework import serializers
from .models import Post
from django.contrib.auth import User

class UserSerializer(serializer.ModelSerialer):
    posts = serializers.PrimaryKeyRelatedField(many=true, queryset=Post.objects.all())

    class Meta:
      model = User
      fields = ['id', 'username', 'posts']

class PostSerializer(serializer.ModelSerializer):
    class Meta:
        model = Post
        fields = ['owner','id', 'title', 'content', 'author']

    def create(self, validated_data):
        return Post.object.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.author = validated_data.get('author', instance.author)
        instance.save()

