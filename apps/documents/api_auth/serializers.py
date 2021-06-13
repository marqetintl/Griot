
from rest_framework import serializers

from apps.documents.models import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = [
            'slug', 'user', 'title', 'src', 'users',
            'name', 'filename', 'ext', 'size', 'created', 'updated',
        ]
        read_only_fields = (
            'slug', 'user',
            'size', 'ext',
            'created', 'updated',
        )

    name = serializers.ReadOnlyField()
    filename = serializers.ReadOnlyField()
    ext = serializers.ReadOnlyField()
    size = serializers.ReadOnlyField()
    # name_truncated = serializers.ReadOnlyField()
    # width = serializers.ReadOnlyField()
