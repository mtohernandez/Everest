# Generated by Django 4.0.4 on 2022-05-17 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackendApp', '0002_alter_project_submittiondate'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='PhotoFileName',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
