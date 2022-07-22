"""
Django settings for server project.

Generated by 'django-admin startproject' using Django 4.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

import os
from pathlib import Path

from dotenv import load_dotenv

# Parse a .env file and then load all the variables found as environment
# variables.
load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = (
    "django-insecure-jm7#=xevypt$a3g%p&ia2%&8!dni#tcfy^$54#fq3hr1=zrku_"
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Installed separately
    "rest_framework",
    "corsheaders",
    # Self made apps
    "smtp",
]

MIDDLEWARE = [
    # Comes with corsheaders app and must be placed in this list as high as
    # possible.
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "server.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "server.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# SELF DEFINED SETTINGS THAT ARE USED BY django-cors-headers

# CORS_ORIGIN_WHITELIST = [
#    "http://localhost:3000",
#    "http://127.0.0.1:3000",
# ]

CORS_ORIGIN_ALLOW_ALL = True

# SELF DEFINED EMAIL SETTINGS

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

# Import values from .env if email provider is outlook.
if os.getenv("EMAIL_PROVIDER") == "outlook":
    EMAIL_HOST = "smtp.office365.com"
    EMAIL_HOST_USERNAME = os.getenv("EMAIL_HOST_USERNAME_OUTLOOK")
    EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD_OUTLOOK")
    EMAIL_RECIPIENTS = str(os.getenv("EMAIL_RECIPIENTS")).split(" ")
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True

# Import values from .env if email provider is gmail.
# NOTE: Not yet worked with it.
elif os.getenv("EMAIL_PROVIDER") == "gmail":
    EMAIL_HOST = "smtp.gmail.com"
    EMAIL_HOST_USERNAME = os.getenv("EMAIL_HOST_USERNAME_GMAIL")
    EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD_GMAIL")
    EMAIL_RECIPIENTS = str(os.getenv("EMAIL_RECIPIENTS")).split(" ")
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True