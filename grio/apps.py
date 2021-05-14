from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class GrioConfig(AppConfig):
    name = 'grio'
    verbose_name = _('Grio Admin')
    verbose_name_plural = _('Grio Admin')
    default_auto_field = 'django.db.models.BigAutoField'
