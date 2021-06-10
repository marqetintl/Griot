from django.db import models
from django.contrib.sites.models import Site

from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from miq.models.mixins import BaseModelMixin


User = get_user_model()


def upload_to(instance, filename):
    return f'files/{instance.user}/{filename}'


class FileQeryset(models.QuerySet):

    def site(self, site):
        return self.filter(site=site)

    def user(self, user):
        return self.filter(user=user)

    # def active(self):
    #     return self.filter(is_active=True)


class FileManager(models.Manager):

    def user(self, user):
        return self.get_queryset().active().user(user)

    # def active(self):
    #     return self.get_queryset().active()

    def get_queryset(self, *args, **kwargs):
        return FileQeryset(self.model, *args, using=self._db, **kwargs)


class FileShared(BaseModelMixin):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='shared_meta'
    )
    file = models.ForeignKey(
        'documents.File', on_delete=models.CASCADE,
        related_name='shared_meta'
    )
    # links
    # perms


class File(BaseModelMixin):

    site = models.ForeignKey(
        Site, on_delete=models.CASCADE,
        related_name='files')
    # Uploader
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='files'
    )
    users = models.ManyToManyField(
        User, blank=True,
        through='documents.FileShared'
    )
    src = models.FileField(
        verbose_name=_("File"),
        help_text=_("Select a file"),
        upload_to=upload_to)

    objects = FileManager()

    class Meta:
        ordering = ('-created', 'name',)
        verbose_name = _('Files')
        verbose_name_plural = _('Files')

    def __str__(self):
        return f'{self.title}' or self.src.name


class Document(File):

    title = models.CharField(
        verbose_name=_("Title"),
        max_length=400, blank=True, null=True)

    # description = models.TextField(
    #     verbose_name=_("Description"),
    #     blank=True, null=True)

    # author = models.CharField(max_length=400, blank=True)
    # is_active = models.BooleanField(default=True)
