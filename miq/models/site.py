from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.sites.models import Site as DjangoSite

from miq.models.mixins import BaseModelMixin


class Site(DjangoSite):
    class Meta(DjangoSite.Meta):
        proxy = True


class Navbar(BaseModelMixin):
    class Meta:
        ordering = ('-created',)
        verbose_name = _('Navbar Settings')
        verbose_name_plural = _('Navbar Settings')

    def __str__(self):
        return f'{self.site} Navbar'

    site = models.OneToOneField(
        Site, on_delete=models.CASCADE,
        related_name='navbar',
    )
