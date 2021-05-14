
from django.urls import reverse_lazy
from django.contrib.sites.models import Site

from miq.mixins import DevLoginRequiredMixin
from django.contrib.sites.shortcuts import get_current_site
# from django.contrib.auth.mixins import LoginRequiredMixin
# from django.contrib.auth.mixins import PermissionRequiredMixin

from rest_framework import serializers

from miq.views.generic import TemplateView


class AdminSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('name', 'domain', 'navbar')

    navbar = serializers.SerializerMethodField()

    def get_navbar(self, instance):
        return [
            {'label': 'Dashboard', 'path': reverse_lazy('grio:index')}
        ]


class AdminView(DevLoginRequiredMixin, TemplateView):
    template_name = 'grio/base.html'
    # permission_required = ''

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        site = get_current_site(self.request)

        data = {
            'site': AdminSiteSerializer(site).data
        }

        self.update_sharedData(context, data)

        return context


class AdminPagesView(AdminView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        data = {
            'pages': ['all']
        }

        self.update_sharedData(context, data)

        return context
