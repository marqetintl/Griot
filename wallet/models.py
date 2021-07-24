from django.db import models
from django.utils.translation import gettext_lazy as _

# Types: Customer, merchant
#
"""


class Profile(models.Model):
    type = models.CharField(_("Type"), max_length=50)


class Wallet(models.Model):
    user = models.OneToOneField(
        "app.User", verbose_name=_(""), on_delete=models.PROTECT)


class Customer(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    email = models.EmailField(_("Email"), max_length=254)
    # number = models.PhoneNumberField(_("Phone"))


class Merchant(Customer):
    pass


class Payment(models.Model):
    wallet = models.OneToOneField(
        "app.Wallet", verbose_name=_(""), on_delete=models.CASCADE)
    # merchant, description, reference, amount, currency


"""
