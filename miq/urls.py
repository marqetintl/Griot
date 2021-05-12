from django.conf import settings
from django.urls import path, include

from rest_framework import routers

from .views import PageView, IndexView
from .auth.viewsets import SectionViewset, PageViewset, IndexViewset

app_name = 'miq'

auth_router = routers.DefaultRouter()
auth_router.register(r'pages', PageViewset)
auth_router.register(r'sections', SectionViewset)
auth_router.register(r'index', IndexViewset)


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),

    path('<slug:slug>/', PageView.as_view(), name='page'),
    path('', IndexView.as_view(), name='index'),
]