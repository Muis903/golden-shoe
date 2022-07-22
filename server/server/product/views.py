from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ManProduct, WomanProduct
from .serializers import ManProductSerializer, WomanProductSerializer

# Create your views here.


@api_view(["GET"])
@method_decorator(csrf_exempt, name="dispatch")
def get_men_products(request):

    forms = ManProduct.objects.all()
    serializer = ManProductSerializer(forms, many=True)

    return Response(serializer.data)


@api_view(["GET"])
@method_decorator(csrf_exempt, name="dispatch")
def get_women_products(request):

    forms = WomanProduct.objects.all()
    serializer = ManProductSerializer(forms, many=True)

    return Response(serializer.data)


@api_view(["POST"])
@method_decorator(csrf_exempt, name="dispatch")
def create_man_product(request):
    # Save request data in serializer var.
    serializer = ManProductSerializer(data=request.data)

    if serializer.is_valid():

        # Save data permanently in SQL database.
        serializer.save()

        return Response(0)
    else:
        return Response(1)


@api_view(["POST"])
@method_decorator(csrf_exempt, name="dispatch")
def create_woman_product(request):
    # Save request data in serializer var.
    serializer = WomanProductSerializer(data=request.data)

    if serializer.is_valid():

        # Save data permanently in SQL database.
        serializer.save()

        return Response(0)
    else:
        return Response(1)
