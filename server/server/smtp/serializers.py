"""
Create model serializers because Response object can not natively handle all
complex data types such as Django model instances. So we need first to serialize
data before can actually render it out.
"""

from rest_framework import serializers
from .models import ContactForm


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = "__all__"
