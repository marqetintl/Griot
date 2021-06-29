
from django.urls import reverse_lazy
from django.contrib.sites.models import Site

from miq.mixins import DevLoginRequiredMixin
from django.contrib.sites.shortcuts import get_current_site
# from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin

from rest_framework import serializers

from miq.models import (Page)
from miq.api_auth.serializers import PageSerializer

from miq.views.generic import ListView, TemplateView


class AdminSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('name', 'domain', 'navbar')

    navbar = serializers.SerializerMethodField()

    def get_navbar(self, instance):
        return [
            {'label': 'Dashboard', 'path': reverse_lazy('grio:index')}
        ]


class ViewMixin(DevLoginRequiredMixin):
    template_name = 'grio/base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        site = get_current_site(self.request)

        data = {
            'site': AdminSiteSerializer(site).data
        }

        self.update_sharedData(context, data)

        return context


class AdminView(ViewMixin, TemplateView):
    pass
    # permission_required = ''


class AdminPagesView(ViewMixin, PermissionRequiredMixin, ListView):
    queryset = Page.objects.parents()
    paginate_by = 16
    permission_required = 'miq.view_page'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data = {}

        pages = context.get('object_list')
        # print('HEHHE', pages.exists())
        if pages:
            data['pages'] = PageSerializer(pages, many=True).data
        else:
            data['pages'] = []

        self.update_sharedData(context, data)

        return context
