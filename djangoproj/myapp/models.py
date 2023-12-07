from django.db import models


class CodeBlockTable(models.Model):
    
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, default='')
    code = models.CharField(max_length=100, default='')
    is_active = models.BooleanField(default=True)
    number_of_connections = models.IntegerField(default=0)



