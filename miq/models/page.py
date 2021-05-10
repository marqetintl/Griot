from uuid import uuid4

from django.db import models
from django.utils import timezone
from django.contrib.sites.models import Site
from django.utils.translation import gettext_lazy as _

from .mixins import BaseModelMixin

__all__ = ['Index', 'Page', 'PageSectionMeta']


class AbstractPage(BaseModelMixin):
    class Meta:
        abstract = True
        ordering = ('-created', '-updated')

    site = models.ForeignKey(
        Site, on_delete=models.CASCADE,
        related_name='pages')

    title = models.CharField(
        max_length=250, help_text=_('Page Meta title'),
        null=True, blank=True
    )


# INDEX PAGE

class IndexManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().prefetch_related('sections').select_related('site')


class Index(AbstractPage):
    class Meta:
        verbose_name = _('Index page')
        verbose_name_plural = _('Index page')

    site = models.OneToOneField(
        Site, on_delete=models.CASCADE,
        related_name='index')
    sections = models.ManyToManyField('miq.Section', blank=True)

    objects = IndexManager()


# PAGE


class PageQueryset(models.QuerySet):

    def draft(self):
        return self.filter(is_published=False)

    def published(self):
        return self.filter(is_published=True)


class PageManager(models.Manager):

    def draft(self):
        return self.get_queryset().draft()

    def published(self):
        return self.get_queryset().published()

    def get_queryset(self, *args, **kwargs):
        return PageQueryset(self.model, *args, using=self._db, **kwargs)\
            .select_related('site')\
            .prefetch_related('sections')


class Page(AbstractPage):
    class Meta:
        verbose_name = _('Page')
        verbose_name_plural = _('Page')

    # MUST BE the same as related name
    source = models.CharField(max_length=100, blank=True, null=True)

    sections = models.ManyToManyField(
        'miq.Section', blank=True,
        through='PageSectionMeta',
        related_name='pages'
    )

    label = models.CharField(max_length=100, help_text=_('Page header label'))
    slug = models.SlugField(
        max_length=200, db_index=True, unique=True,
        default=uuid4
    )

    is_published = models.BooleanField(
        default=False, help_text=_('Publish this page'))
    dt_published = models.DateTimeField(
        blank=True, null=True, help_text=_('Publication date'))

    objects = PageManager()

    def __str__(self):
        return f'{self.site.name} {self.label} page'

    def save(self, *args, **kwargs):

        if self.is_published and not self.dt_published:
            self.dt_published = timezone.now()

        super().save(*args, **kwargs)

    @property
    def detail_url(self):
        if not self.is_published:
            return

        if self.source:
            obj = getattr(self, f'{self.source}')
            if obj:
                try:
                    return obj.detail_url
                except Exception:
                    pass

        return

    def publish(self):
        self.is_published = True
        self.save()


# PAGE SECTION META


class PageSectionMeta(BaseModelMixin):
    class Meta:
        # Do not add same sections to multiple pages
        constraints = [
            models.UniqueConstraint(
                fields=['page', 'section'], name='unique_page_section')
        ]

    page = models.ForeignKey('miq.Page', on_delete=models.CASCADE)
    section = models.ForeignKey(
        'miq.Section', on_delete=models.CASCADE,
    )

    def __str__(self):
        return f'{self.page}, section[{self.section}] {self.section.position}'
