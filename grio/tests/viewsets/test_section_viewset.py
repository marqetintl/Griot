from django.urls import reverse_lazy

from rest_framework.test import APITestCase

from miq.models import Section

from miq.tests.mixins import UserMixin

list_path = reverse_lazy('grio:section-list')


class Mixin(UserMixin):
    pass


class TestSectionViewset(Mixin, APITestCase):
    def setUp(self) -> None:
        super().setUp()

        self.get_user()
        self.client.login(
            username=self.username,
            password=self.password)

    def test_partial_update(self):
        slug = Section.objects.create().slug
        path = reverse_lazy('grio:section-detail', args=[slug])

        title = 'I am a title'
        r = self.client.patch(
            path, data={'type': 'MD', 'title': title}, format='json')

        self.assertEqual(r.status_code, 200)
        section = Section.objects.get(slug=slug)
        self.assertEqual(section.type, 'MD')
        self.assertEqual(section.title, title)

        # TODO: IMAGE

    def test_partial_update_no_type(self):
        section = Section.objects.create()
        path = reverse_lazy('grio:section-detail', args=[section.slug])
        r = self.client.patch(path, data={}, format='json')
        self.assertEqual(r.status_code, 400)

    def test_create(self):
        r = self.client.post(list_path, data={}, format='json')
        self.assertEqual(r.status_code, 201)
        self.assertEqual(r.data.get('type'), 'TXT')

        r = self.client.post(list_path, data={'type': 'MD'}, format='json')
        self.assertEqual(r.status_code, 201)
        self.assertEqual(r.data.get('type'), 'MD')

        self.assertEqual(Section.objects.count(), 2)

    def test_list(self):
        Section.objects.create()
        Section.objects.create()
        Section.objects.create()
        r = self.client.get(list_path)
        self.assertEqual(r.status_code, 200)
        self.assertEqual(len(r.data.get('results')), 0)

    def test_user_not_auth(self):
        self.client.logout()

        r = self.client.get(list_path)
        self.assertEqual(r.status_code, 403)
