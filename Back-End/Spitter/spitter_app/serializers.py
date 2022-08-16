from rest_framework import serializers
from .models import Post, User_profile, Comment


class User_profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_profile
        fields = '__all__'


class Post_Serializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
            "id": instance.id,
            "user": instance.user.name,
            "title": instance.title,
            "body": instance.body,
        }


class Comment_Serializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
            "id": instance.id,
            "user": instance.user.name,
            "body": instance.body,
            
        }
