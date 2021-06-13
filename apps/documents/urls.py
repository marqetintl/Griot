from django.conf import settings
from django.urls import path, include

from rest_framework import routers

from .api_auth.viewsets import DocumentViewset

app_name = 'files'

auth_router = routers.DefaultRouter()
auth_router.register(r'documents', DocumentViewset)


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),
]
