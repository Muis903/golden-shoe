"""
Create model serializers because Response object can not natively handle all
complex data types such as Django model instances. So we need first to serialize
data before can actually render it out.
"""

from rest_framework import serializers
from .models import ManProduct
from .models import WomanProduct


class ManProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManProduct
        fields = "__all__"


class WomanProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = WomanProduct
        fields = "__all__"
