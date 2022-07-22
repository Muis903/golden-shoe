from django.db import models

# Create your models here.


class ContactForm(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    message = models.TextField(null=True, blank=True)
    isSendCopyEnabled = models.BooleanField(null=True)
    created = models.DateTimeField(auto_now_add=True)
