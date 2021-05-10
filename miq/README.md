# How to get Django and React to work together.

This repo follows the blog post on [how to setup django and react with minimal configuration](http://michaelgainyo.com/articles/how-to-get-django-and-reactjs-to-work-together/)

### How to use

I have broken the steps by branches so you can follow along.

In your working directory:

```
git clone https://github.com/marqetintl/django-react-boilerplate.git
```

Next, create a virtual environment called `env` and activate it with:

```
cd  django-react-boilerplate
python3 -m venv env
source env/bin/activate
```

Install dependencies:

```
touch config/settings/.env
```

Add dev env variables. Update the `.env` file

```
DEBUG=on

DB_NAME=databse_name
DB_USER=database_user
DB_PWD=database_password
```

```
pip3 install -r requirements.txt
./manage.py makemigrations
cd client/
npm install
```

Build the project and run the server

```
./manage.py build
./manage.py runserver
```

Finally, open your browser and navigate to `http://127.0.0.1:8000/`.
