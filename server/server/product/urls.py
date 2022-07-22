from django.urls import path

from . import views

urlpatterns = [
    path("create-man-product/", views.create_man_product),
    path("create-woman-product/", views.create_woman_product),
    path("get-men-products/", views.get_men_products),
    path("get-women-products/", views.get_women_products),
]
