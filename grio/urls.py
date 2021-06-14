# from django.conf import settings
from django.urls import path, include, re_path

from rest_framework import routers

from .views import AdminPagesView, AdminView

app_name = 'grio'


urlpatterns = [

    path('grio/pages/', AdminPagesView.as_view(), name="pages"),

    # Catch-all url
    re_path(r'grio/', AdminView.as_view(), name='index'),
]
