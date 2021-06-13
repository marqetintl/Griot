from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class HrmConfig(AppConfig):
    name = 'apps.hrm'
    verbose_name = _('Human Resource Management')
    verbose_name_plural = _('Human Resource Management')
    default_auto_field = 'django.db.models.BigAutoField'
