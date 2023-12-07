
from rest_framework import serializers
from .models import CodeBlockTable

class CodeBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeBlockTable
        fields = ['id', 'title', 'code', 'is_active', 'number_of_connections']
