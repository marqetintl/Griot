
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    # path('', include('apps.documents.urls', namespace='documents')),
    path('', include('miq.auth.accounts.urls', namespace='accounts')),

    path('', include('grio.urls', namespace='grio')),
    path('grio/', include('miq.staff.urls', namespace='staff')),
]

# Must be last
urlpatterns += [
    path('', include('miq_dms.urls', namespace='miq_dms')),
    path('', include('miq.urls', namespace='miq')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
