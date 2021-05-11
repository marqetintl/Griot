import environ
from pathlib import Path

env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, 'my-secret-key-goes-here'),

    GH_DB_NAME=(str, 'grio_db'),
    GH_DB_USER=(str, 'postgres'),
    GH_DB_PWD=(str, 'postgres'),
    GH_DB_HOST=(str, '127.0.0.1'),
    GH_DB_PORT=(str, '5432'),
)

environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

TEMPLATES_DIR = BASE_DIR / 'templates'
CLIENT_DIR = BASE_DIR / 'client'
BUILD_DIR = CLIENT_DIR / 'packages/griot-app/build'

CORS_ORIGIN = None

SECRET_KEY = env('SECRET_KEY')

DEBUG = env('DEBUG')

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    #
    'django.contrib.sites',
    'django.contrib.sitemaps',

    # VENDORS
    'rest_framework',

    # CORE
    'miq.apps.MiqConfig',

    # APPS
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]


"""
# USER MODEL
"""

AUTH_USER_MODEL = 'miq.User'


"""
# AUTHENTICATION
"""

# LOGIN_URL = reverse_lazy('accounts:login')
# LOGIN_REDIRECT_URL = reverse_lazy('blog:account')


"""
# REST FRAMEWORK
"""

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',  # Set for all views
    ],

    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],

    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 16,
}


"""
# SITE
"""

SITE_ID = 1

"""
# API
"""

API_PATH = 'api/v1'

"""
LANG & LOCATION
"""

USE_TZ = True
USE_L10N = True
USE_I18N = True
TIME_ZONE = 'America/New_York'
LANGUAGE_CODE = 'en-us'


"""
AUTO FIELD
"""

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
