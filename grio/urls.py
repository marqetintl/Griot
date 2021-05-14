from django.conf import settings
from django.urls import path, include, re_path

from rest_framework import routers

from .views import AdminPagesView, AdminView
from .viewsets import SectionViewset, PageViewset, IndexViewset

app_name = 'grio'

auth_router = routers.DefaultRouter()
auth_router.register(r'pages', PageViewset)
auth_router.register(r'sections', SectionViewset)
auth_router.register(r'index', IndexViewset)


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),

    path('pages/', AdminPagesView.as_view(), name="pages"),

    # Catch-all url
    re_path(r'', AdminView.as_view(), name='index'),
]
