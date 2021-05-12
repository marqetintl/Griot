
from django.contrib.auth.mixins import LoginRequiredMixin
# from django.contrib.auth.mixins import PermissionRequiredMixin

from miq.views.generic import TemplateView


class GrioAdminView(LoginRequiredMixin, TemplateView):
    template_name = 'miq/grio-admin.html'
    # permission_required = ''

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        return context
