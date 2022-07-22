from django.urls import path

from . import views

urlpatterns = [
    path("get-data/", views.get_data),
    path("send-contact-form/", views.send_contact_form),
]
