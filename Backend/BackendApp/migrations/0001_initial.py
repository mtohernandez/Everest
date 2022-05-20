# Generated by Django 4.0.4 on 2022-05-17 03:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FieldsOfStudy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FieldName', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Models',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Operations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('idModel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.models')),
            ],
        ),
        migrations.CreateModel(
            name='Roles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='States',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('State', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=500)),
                ('LastName', models.CharField(max_length=500)),
                ('Email', models.EmailField(max_length=254)),
                ('Password', models.CharField(max_length=80)),
                ('Adress', models.CharField(max_length=600)),
                ('Company', models.CharField(max_length=100)),
                ('idRol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.roles')),
            ],
        ),
        migrations.CreateModel(
            name='Rol_operacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idOperation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.operations')),
                ('idRole', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.roles')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=700)),
                ('Desc', models.TextField()),
                ('SubmittionDate', models.DateField()),
                ('Budget', models.PositiveIntegerField()),
                ('Mount', models.PositiveIntegerField()),
                ('Author', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.user')),
                ('Field', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.fieldsofstudy')),
                ('State', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BackendApp.states')),
            ],
        ),
    ]
