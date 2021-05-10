
from django.contrib.sites.models import Site

from django.test import TransactionTestCase


from miq.models import Page


class TestPage(TransactionTestCase):
    def setUp(self) -> None:
        super().setUp()
        self.site = Site.objects.first()

    def test_create(self):
        self.assertIsNotNone(self.site)
        page = Page.objects.create(site=self.site, label="label")

        self.assertEqual(f'{page}', 'example.com label page')
        self.assertIsNone(page.detail_url)

        page.publish()
        self.assertTrue(page.is_published)

        Page.objects.create(site=self.site)
        self.assertEqual(Page.objects.count(), 2)
        self.assertEqual(Page.objects.draft().count(), 1)
        self.assertEqual(Page.objects.published().count(), 1)
