
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

from miq.views import IndexView
from miq.staff.views import StaffLoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('staff/', include('miq.staff.urls', namespace='staff')),
]

urlpatterns += [
    # path('', include('apps.documents.urls', namespace='documents')),
    path('', include('miq.auth.accounts.urls', namespace='accounts')),
    path('', include('grio.urls', namespace='grio')),
]

# Must be last
urlpatterns += [
    path('', include('miq_dms.urls', namespace='miq_dms')),
    path('', include('miq_hrm.urls', namespace='miq_hrm')),

    #
    path('', include('miq.urls', namespace='miq')),

    # override indexpage: dsia only
    path('', StaffLoginView.as_view(), name='login'),

    # Must explicitly set the indexview from miq
    # as it's not included in the miq.urls
    path('', IndexView.as_view(), name='index'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
