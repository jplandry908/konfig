# Generated by Django 5.0.4 on 2024-04-22 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chatbot_app", "0014_rename_userspace_currentuserspace"),
    ]

    operations = [
        migrations.AddField(
            model_name="organization",
            name="name",
            field=models.CharField(default="Default", max_length=100),
            preserve_default=False,
        ),
    ]