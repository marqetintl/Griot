import os
from django.db import models
from django.contrib.sites.models import Site

from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import filesizeformat

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


class FilePermission(models.TextChoices):
    VIEW = "VIEW", _('View')
    COMMENT = "COMMENT", _('Comment')
    EDIT = "EDIT", _('Edit')


class FileShared(BaseModelMixin):
    permission = models.CharField(
        _("Permission"), max_length=50,
        choices=FilePermission.choices, default=FilePermission.VIEW
    )
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
        ordering = ('-created', '-updated',)
        verbose_name = _('File')
        verbose_name_plural = _('Files')

    @property
    def name(self):
        return self.src.name.split('/')[-1]

    @property
    def filename(self):
        return self.src.name.split('/')[0]

    @property
    def ext(self):
        return os.path.splitext(self.name)[1]

    @property
    def size(self):
        return filesizeformat(self.src.size)

    def __str__(self):
        return f'{self.src}'


class Document(File):

    title = models.CharField(
        verbose_name=_("Title"),
        max_length=400, blank=True, null=True)

    class Meta:
        ordering = ('-created', 'title',)
        verbose_name = _('Document')
        verbose_name_plural = _('Documents')

    def __str__(self):
        title = self.title or self.src.name
        return f'{title}'

    # description = models.TextField(
    #     verbose_name=_("Description"),
    #     blank=True, null=True)

    # author = models.CharField(max_length=400, blank=True)
    # is_active = models.BooleanField(default=True)
