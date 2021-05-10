
from django.db import models
from django.utils.translation import gettext_lazy as _

from .mixins import BaseModelMixin


__all__ = ['SectionType', 'Section', 'SectionImageMeta']


class SectionType(models.TextChoices):
    # Text types
    TXT = 'TXT', _('Text')
    MD = 'MD', _('Markdown')

    # Media Types
    IMG = 'IMG', _('Image')

    # Mixed Types
    JUMB = 'JUMB', _('Jumbotron')
    SLIDER = 'SLIDER', _('Slider')

    # Embed
    EMBED = 'EMBED', _('Embed')


class SectionAbstract(BaseModelMixin):
    class Meta:
        abstract = True

    title = models.CharField(max_length=200, blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    url = models.URLField(
        null=True, blank=True,
        help_text=_('Call to action or link url'))


# SECTION

class SectionManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().prefetch_related('images')


class Section(SectionAbstract):

    class Meta:
        verbose_name = _('Section')
        verbose_name_plural = _('Sections')
        ordering = ('created', 'position')

    def __str__(self):
        return f'{self.pk}-{self.type}'

    # From Abstract: title, text, url

    type = models.CharField(
        max_length=15, choices=SectionType.choices,
        default=SectionType.TXT
    )

    html = models.TextField(blank=True, null=True)
    nodes = models.JSONField(blank=True, null=True)
    images = models.ManyToManyField(
        'miq.Image',
        blank=True,
        through='SectionImageMeta',
        related_name='sections')

    position = models.PositiveIntegerField(default=1)

    objects = SectionManager()

    @property
    def image(self):
        if self.images.exists():
            return self.images.order_by('position').first()


class SectionImageMeta(SectionAbstract):

    # From Abstract: title, text, url

    section = models.ForeignKey('miq.Section', on_delete=models.CASCADE)
    img = models.ForeignKey('miq.Image', on_delete=models.CASCADE)
