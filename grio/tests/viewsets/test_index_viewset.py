from django.urls import reverse_lazy

from rest_framework import status
from rest_framework.test import APITestCase

from miq.models import Index
from miq.models.section import Section

from miq.tests.mixins import UserMixin, SiteMixin

path = reverse_lazy('grio:index-detail', args=['current'])


class Mixin(SiteMixin, UserMixin):
    pass


class TestPageViewset(Mixin, APITestCase):
    def setUp(self) -> None:
        super().setUp()

        # TODO: Admin ops only
        self.get_user()
        self.site.save()
        self.client.login(
            username=self.username,
            password=self.password)

    def test_on_section_add(self):
        path = reverse_lazy('grio:index-section', args=['current'])

        # Add section
        section_slug = Section.objects.create().slug
        r = self.client.post(
            path, data={'slug': section_slug}, format='json')
        self.assertEqual(r.status_code, status.HTTP_200_OK)
        self.assertIn(f'{section_slug}', r.data.get('sections'))

        index = self.site.index

        # update_sections_source
        section = index.sections.get(slug=section_slug)
        self.assertEqual(section.source, f'{index.slug}')

        # Retriev page sections
        section_list_path = reverse_lazy('grio:section-list')
        r = self.client.get(section_list_path, {'source': index.slug})
        self.assertEqual(r.data.get('count'), 1)

    def test_sections_is_readonly(self):
        section = Section.objects.create()

        r = self.client.patch(
            path, data={'sections': [section.slug]}, format='json')
        self.assertEqual(r.status_code, status.HTTP_200_OK)
        self.assertEqual(len(r.data.get('sections')), 0)

    def test_partial_update(self):
        title = 'Index 1'
        r = self.client.patch(
            path, data={'title': title}, format='json')

        self.assertEqual(r.status_code, status.HTTP_200_OK)
        self.assertEqual(self.site.index.title, title)

    def test_user_not_auth(self):
        self.client.logout()

        r = self.client.get(path)
        self.assertEqual(r.status_code, status.HTTP_403_FORBIDDEN)
