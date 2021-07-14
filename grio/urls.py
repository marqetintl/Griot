
from django.urls import path
from .views import AdminPagesView

app_name = 'grio'


urlpatterns = [

    path('grio/pages/', AdminPagesView.as_view(), name="pages"),
]
