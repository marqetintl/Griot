from django.contrib.sites.shortcuts import get_current_site

from rest_framework import viewsets
from rest_framework.parsers import JSONParser, MultiPartParser

from miq.mixins import DevLoginRequiredMixin

from apps.documents.api_auth.serializers import Document, DocumentSerializer


class DocumentViewset(DevLoginRequiredMixin, viewsets.ModelViewSet):
    lookup_field = 'slug'
    serializer_class = DocumentSerializer
    queryset = Document.objects.all()
    parser_classes = (JSONParser,  MultiPartParser)

    def perform_create(self, ser):
        ser.save(site=get_current_site(self.request), user=self.request.user)

