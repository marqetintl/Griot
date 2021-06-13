from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class DocumentsConfig(AppConfig):
    name = 'apps.documents'
    verbose_name = _('Document')
    verbose_name_plural = _('Documents')
    default_auto_field = 'django.db.models.BigAutoField'
