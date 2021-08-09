
from django.contrib.auth.mixins import PermissionRequiredMixin


from miq.staff.views import AdminViewMixin
from miq.models import Page
from miq.staff import PageSerializer

from miq.views.generic import ListView

# permission_required = ''


class AdminPagesView(AdminViewMixin, PermissionRequiredMixin, ListView):
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
