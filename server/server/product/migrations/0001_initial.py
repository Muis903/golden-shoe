# Generated by Django 4.0.6 on 2022-07-22 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ManProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.JSONField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WomanProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.JSONField(null=True)),
            ],
        ),
    ]
