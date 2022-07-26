# Generated by Django 4.0.6 on 2022-07-25 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=20)),
                ('message', models.TextField(blank=True, null=True)),
                ('isSendCopyEnabled', models.BooleanField(null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
