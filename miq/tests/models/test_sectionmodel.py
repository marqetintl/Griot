from django.test import TransactionTestCase

from miq.models import Section, TextSection, MarkdownSection, ImageSection


class TestSectionModel(TransactionTestCase):
    def test_create(self):
        section = Section.objects.create()
        self.assertEqual(section.type, 'TXT')
        self.assertEqual(f'{section}', f'{section.pk}-TXT')


class TestImageSectionModel(TransactionTestCase):
    def test_create(self):
        self.assertEqual(ImageSection.objects.create().type, 'IMG')


class TestMarkdownSectionModel(TransactionTestCase):
    def test_create(self):
        self.assertEqual(MarkdownSection.objects.create().type, 'MD')


class TestTextSectionModel(TransactionTestCase):
    def test_create(self):
        self.assertEqual(TextSection.objects.create().type, 'TXT')
