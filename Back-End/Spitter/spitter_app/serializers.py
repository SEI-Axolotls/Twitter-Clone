from rest_framework import serializers
from .models import Post, User_profile, Comment


class User_profileSerializer(serializers.ModelSerializer):
    class Meta:
      model = User_profile
      fields = '__all__'


class Comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class Post_Serializer(serializers.BaseSerializer):
    def to_representation(self,instance):
        return {
            "id":instance.id,
            "content": instance.content,
            "user": instance.user.name,
         }

class Comment_Serializer(serializers.BaseSerializer):
    def to_representation(self,instance):
        return{
          "id":instance.id,
          "content": instance.content,
          "user": instance.user.name,
        }
    class Meta: 
            model = Post
            fields = '__all__'

    # def create(self, validated_data):
    #     return Comment.object.create(**validated_data)

    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.content = validated_data.get('content', instance.content)
    #     instance.author = validated_data.get('author', instance.author)
    #     instance.save()

