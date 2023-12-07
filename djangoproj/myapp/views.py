# views.py

from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CodeBlockTable
from .serializers import CodeBlockSerializer
from django.shortcuts import render


def lobby(request):
    return render(request, 'index.html')


@api_view(['GET'])
def get_code_blocks(request):
    code_blocks = CodeBlockTable.objects.all()
    serializer = CodeBlockSerializer(code_blocks, many=True)
    return Response(serializer.data)


def code_block_page(request, code_block_id):
    # Your view logic here
    try:
        code_block = CodeBlockTable.objects.get(id=code_block_id)
        data = {
            "code_block_id": code_block.id,
            "title": code_block.title,
            "code": code_block.code
        }
        return JsonResponse(data)
    except CodeBlockTable.DoesNotExist:
        return JsonResponse({"error": "Code block not found"}, status=404)