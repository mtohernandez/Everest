from rest_framework import serializers
from BackendApp.models import Roles, User, Models, Operations, Rol_operacion, FieldsOfStudy, States, Project

class RolesSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = ('id','Name')

class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','Name', 'LastName', 'Email', 'Password', 'Adress', 'Company', 'idRol')

class ModelsSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Models
        fields = ('id','Name')

class OperationsSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Operations
        fields = ('id','Name', 'idModel')

class Rol_operacionSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Operations
        fields = ('id','idRole', 'idOperation')

class FieldsOfStudySerilizer(serializers.ModelSerializer):
    class Meta:
        model = FieldsOfStudy
        fields = ('id','FieldName')

class StatesSerilizer(serializers.ModelSerializer):
    class Meta:
        model = States
        fields = ('id','State')

class ProjectSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id','Title', 'Desc', 'Field', 'Author', 'SubmittionDate', 'Budget', 'Mount', 'State', 'PhotoFileName')