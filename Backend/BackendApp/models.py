from django.db import models
from django.db.models import Model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
# Create your models here.

class Roles(Model):
    Name = models.CharField(max_length = 50)

class User(Model):
    Name = models.CharField(max_length = 500)
    LastName = models.CharField(max_length = 500)
    Email = models.EmailField()
    Password = models.CharField(max_length = 80)
    Adress = models.CharField(max_length = 600)
    Company = models.CharField(max_length = 100)
    idRol = models.ForeignKey(Roles, on_delete = models.CASCADE)

class Models(Model):
    Name = models.CharField(max_length = 50)

class Operations(Model):
    Name = models.CharField(max_length = 50)
    idModel = models.ForeignKey(Models, on_delete = models.CASCADE)

class Rol_operacion(Model):
    idRole = models.ForeignKey(Roles, on_delete = models.CASCADE)
    idOperation = models.ForeignKey(Operations, on_delete = models.CASCADE)

class FieldsOfStudy(models.Model):
    FieldName = models.CharField(max_length = 30)

class States(models.Model):
    State = models.CharField(max_length = 30)

class Project(models.Model):
    Title = models.CharField(max_length = 700)
    Desc = models.TextField()
    Field = models.ForeignKey(FieldsOfStudy, on_delete = models.CASCADE)
    Author = models.OneToOneField(User, on_delete = models.CASCADE)
    SubmittionDate = models.DateField('%d/%m/%Y')
    Budget = models.PositiveIntegerField()
    Mount = models.PositiveIntegerField()
    State = models.ForeignKey(States, on_delete = models.CASCADE)
    PhotoFileName = models.CharField(max_length = 500, null = True)
