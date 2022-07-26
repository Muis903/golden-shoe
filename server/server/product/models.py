from django.db import models

# Create your models here.


class ManProduct(models.Model):
    # Have decided to save it as JSON because it easier to handle as save but
    # not as save as it can be
    product = models.JSONField(null=True)


class WomanProduct(models.Model):
    # Have decided to save it as JSON because it easier to handle as save but
    # not as save as it can be
    product = models.JSONField(null=True)