## Django Cheatsheet

### Run back end Django server

```bash
python manage.py runserver
```

### Add new man product to the database

Go to [here](http://127.0.0.1:8000/product/create-man-product/) and pass a JSON file from `./product/products/men/<ANY_FILE>.json`

Check whether it successfully saved. Go to [here](http://127.0.0.1:8000/product/get-men-products/) and find last added object

### Add new woman product to the database

Go to [here](http://127.0.0.1:8000/product/create-woman-product/) and pass a JSON file from `./product/products/women/<ANY_FILE>.json`

Check whether it successfully saved. Go to [here](http://127.0.0.1:8000/product/get-women-products/) and find last added object

### Make database migrations

You can use the command if you just created an app by running `python manage.py startapp <PROJECT_NAME>` or have modified a `model.py` or deleted `db.sqlite3`. Run:

```
python manage.py makemigrations <APP_NAME>
```

### Make database migrations

You can use the command if you just created an app by running `python manage.py startapp <PROJECT_NAME>` or have modified a `model.py` or deleted `db.sqlite3`. Run:

```
python manage.py migrate
```

### Delete database

**!!!DANGER ZONE!!!** Be aware of this command. Run `rm db.sqlite3`

### Delete migrations

**!!!DANGER ZONE!!!** Be aware of this command. Run `rm -r <APP_NAME>/migrations`
