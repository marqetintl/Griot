
from django.contrib import admin
from django.conf import settings
from django.apps import apps
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
