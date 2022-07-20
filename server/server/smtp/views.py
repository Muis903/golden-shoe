from django.conf import settings
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ContactForm
from .serializers import ContactFormSerializer

# Create your views here.


@api_view(["GET"])
def getData(request):
    """Return all contact forms. NOTE: delete this function in production"""

    forms = ContactForm.objects.all()
    serializer = ContactFormSerializer(forms, many=True)

    return Response(serializer.data)


@api_view(["POST"])
@method_decorator(csrf_exempt, name="dispatch")
def send_contact_form(request):
    """
    Send e-mail to the show owner.

    Shop owner will be receiving the contact form that a user will be able to
    fill in.
    """

    # Save request data in serializer var.
    serializer = ContactFormSerializer(data=request.data)

    # Assert received data with ContactFormSerializer.
    if serializer.is_valid():

        # Save data permanently in SQL database.
        serializer.save()

        # Send e-mail to the shop owner mailbox.
        send_mail(
            subject=f"✉️  New contact message from {serializer.data['name']}",
            message="",  # Is empty bc we send message in HTML format below.
            html_message=get_html_msg(
                name=serializer.data["name"],
                msg=serializer.data["message"],
                email=serializer.data["email"],
                phone=serializer.data["phone"],
            ),
            auth_password=settings.EMAIL_HOST_PASSWORD,
            auth_user=settings.EMAIL_HOST_USERNAME,
            recipient_list=settings.EMAIL_RECIPIENTS,
            from_email=settings.EMAIL_HOST_USERNAME,
            fail_silently=True,
        )

        # Return 0 as a response to the front end client if no errors occured.
        # Such response implementation is widely used in other pragramming
        # languages like in C++ and it's called as `exit status`.
        # 0 means no errors.
        #
        # On front end side we validate whether server has successfully
        # processed the e-mail sending or not. So we can show to the user a
        # notification that his form has been successfully received by
        # Golden Shoe.
        return Response(0)
    else:
        # Return 1 as a response to the front end client if an error occured.
        # Such response implementation is widely used in other pragramming
        # languages like in C++ and it's called as `exit status`.
        # 1 means error.
        #
        # On front end side we validate whether server has successfully
        # processed the e-mail sending or not. So we can show to the user a
        # notification that his form has been successfully received by
        # Golden Shoe.
        return Response(1)


def get_html_msg(name: str, msg: str, email: str, phone: str) -> str:
    """Return message in HTML format"""

    return f"""
        <h1>🎉 YOU HAVE RECEIVED NEW MESSAGE 🎉</h1>

        <br>
            <b>
                From:
            </b>
        </br>
        <br>
            {name}
        </br>

        <br>
            <b>
                Message:
            </b>
        </br>
        <br>
            {msg}
        </br>

        <br>
            <b>
                Reply:
            </b>
        </br>
        <br>
            Email: {email}
        </br>
            Phone: {phone}
    """
