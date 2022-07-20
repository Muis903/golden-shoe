# Quickstart

## Requirements

Make sure you have installed on your computer:

- [Python ^3.10.5](https://www.python.org/downloads/)
- [virtualenv](https://pypi.org/project/virtualenv/)
- [pipx](https://pypi.org/project/pipx/)
- [poetry](https://python-poetry.org/docs/#installing-with-pipx)

Make sure you have outlook account or gmail account or both.

- [outlook](https://outlook.live.com/)
- [gmail](https://www.google.com/intl/en/gmail/about/)

### 1) .env

Create `.env` file in server root directory:

```bash
touch .env
```

Insert environment variables, choose Golden Shoe email provider (only 1 at the same time) and assign values to the rest:

```bash
EMAIL_PROVIDER="outlook"                                    # supports only outlook | gmail for now. choose which one you want to use.
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

### 3) Start Django server

```
cd server
python manage.py runserver
```
