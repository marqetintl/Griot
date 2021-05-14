from rest_framework import serializers

from miq.models import (
    Page, Section
)

__all__ = (
    'PageSerializer',
)


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = (
            'slug', 'source', 'sections', 'label',  'is_published', 'dt_published',
            # 'sections_data',
        )
        read_only_fields = ('dt_published', 'sections')

    sections = serializers.SlugRelatedField(
        slug_field="slug", read_only=True,
        many=True,
        # queryset=Section.objects.all(), required=False
    )
