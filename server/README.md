# Quickstart

## Requirements

Make sure you have installed on your computer:

-   [Python ^3.10.5](https://www.python.org/downloads/)
-   [virtualenv](https://pypi.org/project/virtualenv/)
-   [pipx](https://pypi.org/project/pipx/)
-   [poetry](https://python-poetry.org/docs/#installing-with-pipx)

Make sure you have outlook account or gmail account or both.

-   [outlook](https://outlook.live.com/)
-   [gmail](https://www.google.com/intl/en/gmail/about/)

### 1) .env

Create `.env` file in server root directory:

```bash
touch .env
```

Insert environment variables, choose Golden Shoe email provider (only 1 at the same time) and assign values to the rest:

```bash
EMAIL_PROVIDER="outlook"                                    # supports only outlook for now (gmail support will be added soon!).
EMAIL_HOST_USERNAME_OUTLOOK=<YOUR_OUTLOOK_EMAIL_ADDRESS>    # full in your outlook e-mail address (e.g. 'john_doe@outlook.com') if have chozen outlook email provider.
EMAIL_HOST_PASSWORD_OUTLOOK=<YOUR_OUTLOOK_EMAIL_PASSWORD>   # full in the password of your outlook e-mail address if have chozen outlook email provider.
EMAIL_HOST_USERNAME_GMAIL=<YOUR_GMAIL_EMAIL_ADDRESS>        # full in your gmail e-mail address (e.g. 'john_doe@gmail.com') if you have chozen gmail email provider.
EMAIL_HOST_PASSWORD_GMAIL=<YOUR_GMAIL_EMAIL_PASSWORD>       # full in the password of your gmail e-mail address if you have chozen gmail email provider.
EMAIL_RECIPIENTS=<FIRST_EMAIL_ADDRESS SECOND_EMAIL_ADDRESS> # full in recipients (1 recipient or more) separated by space < > each (e.g. "john_doe@gmail.com jack@outlook.com")
```

So your working directory should include `.env` now:

```
.
├── .env
├── .gitignore
├── README.md
├── poetry.lock
├── pyproject.toml
├── server
├── tests
...
```

### 2) Install project dependencies

In order to keep project dependencies files in the scope of the project we use `poetry` with Python virtual environment.

Create Python virtual environment and activate it:

```bash
python3 -m virtualenv venv
source venv/bin/activate
```

So your working directory should include `venv` now:

```
.
├── .env
├── .gitignore
├── README.md
├── poetry.lock
├── pyproject.toml
├── server
├── tests
|── venv
...
```

After we have activated the virtual environment we can now download all dependecies that are listed in `pyproject.toml`:

```bash
poetry install
```

## Usage

### 1) Activate Python virtual environment

In order to run the server first we have to activate the virtual environment wherein all Python dependecies are located. Think of it as `node_modules` in JavaScript while `pyproject.toml` as `package.json`. **If you do not activate the virtual environment first before to interact with the back end you will get an error that Django is not installed**.

To activate the virtual environment run:

```bash
source venv/bin/activate
```

### 2) Start back end Django server

After you have the activated virtual environment you can run the back end Django server now by running the commando:

```bash
cd server
python manage.py runserver
```

## Project structure

```
.
├── .env                        # KEEP IT PRIVATE!
├── .gitignore                  # List of project files and directories to not upload to GitHub
├── README.md                   # Documentation
├── __init__.py                 # Generated and used by Django
├── poetry.lock                 # Generated and used by Poetry
├── pyproject.toml              # Project and dependecies overview (similar to package.json). Used by Poetry
├── server                      # Back end Django implementation of our server
│   ├── db.sqlite3              # SQL database
│   ├── manage.py               # Generated by Django. Managing file to interact with Django by running `python manage.py <COMMAND>`.
│   ├── product                 # Generated by us and used by us. A Django app that is used to save products in database, accept API calls from front end
│   │   ├── __init__.py         # Generated and used by Django
│   │   ├── __pycache__         # Generated and used by Python
│   │   ├── admin.py            # Generated and used by Django or us. We did not use it yet.
│   │   ├── apps.py             # Generated and used by Django
│   │   ├── migrations          # Generated and used by Django. Database migrations history. Modified when run `python manage.py makemigrations`
│   │   ├── models.py           # Generated and used by Django and us. Here we define product model for our database
│   │   ├── products            # Created by us to save men and women products in json format and save it then in localhost:8000/product/create-man-product or localhost:8000/product/create-woman-product
│   │   ├── serializers.py      # Created by us to serialize data that comes from API call. Read more about by googling `django rest framework serializers`
│   │   ├── tests.py            # Generated by Django to let us write tests for the product app
│   │   ├── urls.py             # Created by us to define URL address when we make API call
│   │   └── views.py            # Generated by Django and used by us to write functions that are specific to each URL defined in urls.py
│   ├── server                  # Generated by Django and used by us. This main directory from all here. We import the urls from each app that we define to urls.py otherwise Django will fail to process URL
│   │   ├── __init__.py         # Generated and used by Django
│   │   ├── __pycache__         # Generated and used by Python
│   │   ├── asgi.py             # Generated and used by Django
│   │   ├── settings.py         # Generated by Django and set by us. The only settings file for the whole Django. Here we have to define installed apps in the list, define constant variable to have access to from everywhere in the Django project and set up much more VERY SENSITIVE settings
│   │   ├── urls.py             # Generated by Django. All URLs that are available locating here
│   │   └── wsgi.py             # Generated by Django and used by Django
│   └── smtp                    # SMTP app that is created by us for Django. SMTP stands for Simple Mail Transfer Protocol that allows us to send e-mails from e-mail clients such as this Django server
│       ├── __init__.py         # Generated and used by Django
│       ├── __pycache__         # Generated and used by Python
│       ├── admin.py            # Generated and used by Django or us. We did not use it yet.
│       ├── apps.py             # Generated and used by Django
│       ├── migrations          # Generated and used by Django. Database migrations history. Modified when run `python manage.py makemigrations`
│       ├── models.py           # Generated and used by Django and us. Here we define contact form model for our database
│       ├── serializers.py      # Created by us to serialize data that comes from API call. Read more about by googling `django rest framework serializers`
│       ├── tests.py            # Generated by Django to let us write tests for the smtp app
│       ├── urls.py             # Created by us to define URL address when we make API call
│       └── views.py            # Generated by Django and used by us to write functions that are specific to each URL defined in urls.py
├── tests                       # Generated by Poetry. We did not use it yet
│   ├── __init__.py
│   └── test_backend.py
└── venv                        # Python virtual environment that we have created by running `python3 -m virtualenv venv`
    ├── .gitignore
    ├── bin                     # Python packages
    ├── lib
    │   └── python3.10          # Our Python 3.10.5
    └── pyvenv.cfg
```
