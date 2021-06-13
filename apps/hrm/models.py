from django.db import models
from django.contrib.sites.models import Site
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from miq.models.mixins import BaseModelMixin

User = get_user_model()


class Company(BaseModelMixin):
    class Meta:
        ordering = ('-created', 'name')
        verbose_name = _('Company')
        verbose_name_plural = _('Company')

    sites = models.ManyToManyField(Site, through='hrm.CompanySite')
    director = models.OneToOneField(
        'hrm.Employee', on_delete=models.SET_NULL, null=True, related_name='owns')
    name = models.CharField(max_length=200)


class CompanySite(BaseModelMixin):
    company = models.ForeignKey(
        "hrm.Company", verbose_name=_("Company"),
        on_delete=models.CASCADE)
    site = models.ForeignKey(
        Site, verbose_name=_("Site"), on_delete=models.CASCADE)


class Department(BaseModelMixin):
    company = models.ForeignKey(
        "hrm.Company", verbose_name=_("Company"),
        on_delete=models.CASCADE, related_name="departments")
    parent = models.ForeignKey(
        "self", verbose_name=_("Parent Department"),
        on_delete=models.PROTECT, related_name="children")
    manager = models.OneToOneField(
        'hrm.Employee', verbose_name=_("Manager"),
        on_delete=models.SET_NULL, null=True, related_name="manages")

    name = models.CharField(_("Name"), max_length=200)


class Employee(BaseModelMixin):
    company = models.ForeignKey(
        "hrm.Company", verbose_name=_("Company"),
        on_delete=models.CASCADE, related_name="employees")
    department = models.ForeignKey(
        'hrm.Department', on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name='employees')

    # Use for invitations, then set user email with
    # company email on invite confirmation
    private_email = models.EmailField(
        _("Private email"), max_length=254,
        null=True, blank=True,
    )
    user = models.OneToOneField(
        User, verbose_name=_("User"),
        on_delete=models.CASCADE,

        # Create employee without user
        null=True, blank=True
    )

#
    # user properties
    # username, first_name, last_name, email,
    # is_staff, is_active, date_joined
    # -- methods
    # get_full_name, get_short_name, email_user

    # user permission properties
    # groups, user_permissions
    # is_superuser
    # -- methods
    # get_user_permissions, get_group_permissions, get_all_permissions, has_perm,
    # has_perms, has_module_perms
#
    # Type: full/part time, contract, intern
    # supervisor = models.ForeignKey(
    #     'self', on_delete=models.SET_NULL,
    #     blank=True, null=True, related_name='subordinates')
