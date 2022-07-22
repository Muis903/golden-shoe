from django.db import models

# Create your models here.


class ManProduct(models.Model):
    product = models.JSONField(null=True)
    # pid = models.IntegerField(null=True)
    # name = models.CharField(max_length=200)
    # href = models.CharField(max_length=200)
    # price = models.CharField(max_length=200)
    # rating = models.IntegerField(null=True)
    # reviewCount = models.IntegerField(null=True)
    # colors = models.JSONField(null=True)
    # sizes = models.JSONField(null=True)


class WomanProduct(models.Model):
    product = models.JSONField(null=True)
    # pid = models.IntegerField(null=True)
    # name = models.CharField(max_length=200)
    # href = models.CharField(max_length=200)
    # price = models.CharField(max_length=200)
    # rating = models.IntegerField(null=True)
    # reviewCount = models.IntegerField(null=True)
    # colors = models.JSONField(null=True)
    # sizes = models.JSONField(null=True)
