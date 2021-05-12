from django.conf import settings
from django.urls import path, include, re_path

from rest_framework import routers

from .views import PageView, IndexView
from .auth.views import GrioAdminView
from .auth.viewsets import SectionViewset, PageViewset, IndexViewset

app_name = 'miq'

auth_router = routers.DefaultRouter()
auth_router.register(r'pages', PageViewset)
auth_router.register(r'sections', SectionViewset)
auth_router.register(r'index', IndexViewset)


admin_views = [

    # Catch-all url
    re_path(r'', GrioAdminView.as_view(), name='grio-index'),
]


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),

    path('grio/', include((admin_views))),

    path('<slug:slug>/', PageView.as_view(), name='page'),
    path('', IndexView.as_view(), name='index'),
]
