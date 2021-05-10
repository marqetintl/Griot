from django.test import TransactionTestCase

from miq.models import Section, TextSection, MarkdownSection, ImageSection


class TestSection(TransactionTestCase):
    def test_create(self):
        section = Section.objects.create()
        self.assertEqual(section.type, 'TXT')
        self.assertEqual(f'{section}', '1-TXT')


class TestImageSection(TransactionTestCase):
    def test_create(self):
        self.assertEqual(ImageSection.objects.create().type, 'IMG')


class TestMarkdownSection(TransactionTestCase):
    def test_create(self):
        self.assertEqual(MarkdownSection.objects.create().type, 'MD')


class TestTextSection(TransactionTestCase):
    def test_create(self):
        self.assertEqual(TextSection.objects.create().type, 'TXT')
