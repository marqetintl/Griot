import shutil
from django.urls import reverse_lazy
from django.test import override_settings

from rest_framework import status
from rest_framework.test import APITestCase

from apps.documents.models import Document
from miq.tests.utils import get_temp_img

from miq.tests.mixins import TestMixin

TEST_MEDIA_DIR = 'test_media'
list_path = reverse_lazy('documents:document-list')


class Mixin(TestMixin):
    pass


@override_settings(MEDIA_ROOT=(TEST_MEDIA_DIR))
class TestDocumentViewset(Mixin, APITestCase):
    def setUp(self) -> None:
        super().setUp()

        self.get_user()
        self.client.login(
            username=self.username,
            password=self.password)

    def tearDown(self):
        try:
            shutil.rmtree(TEST_MEDIA_DIR)
        except Exception:
            pass

    # def test_partial_update(self):
    #     pass

    def test_create(self):
        # TODO: Require site slug on create
        print(list_path)
        src = get_temp_img()
        r = self.client.post(list_path, data={'src': src}, format='multipart')
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)

        slug = r.data.get('slug')
        doc = Document.objects.get(slug=slug)

        self.assertEqual(doc.site, self.site)
        self.assertEqual(doc.user.username, self.username)

    # test_src_required

    def test_list(self):
        r = self.client.get(list_path)
        self.assertEqual(r.status_code, status.HTTP_200_OK)

        # test count

    def test_user_not_auth(self):
        self.client.logout()
        r = self.client.get(list_path)
        # self.assertNotEqual(r.status_code, 200)

        # Redirect
        self.assertEqual(r.status_code, status.HTTP_302_FOUND)


# grio.tests.viewsets.test_auth_image_viewset.TestSectionViewset.test_user_not_auth
