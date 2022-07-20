from django.urls import path

from . import views

urlpatterns = [
    path("send-contact-form/", views.send_contact_form),
]
