#urls.py

from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.lobby, name='index'),
    path('api/code_blocks/', views.get_code_blocks, name='get_code_blocks'),
    path('code_block_page/<int:code_block_id>/', views.code_block_page, name='code_block_page'),
    # path('api/code_blocks/', views.get_code_blocks, name='get_code_blocks'),

]
