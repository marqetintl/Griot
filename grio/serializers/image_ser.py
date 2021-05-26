from rest_framework import serializers
from miq.models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = [
            'slug',
            # 'name', 'name_truncated',
            'src',
            'alt_text', 'caption', 'position',
            #  'height', 'width', 'size',
            'created', 'updated',
        ]
        read_only_fields = (
            'slug', 'name', 'height', 'width', 'size',
            'created', 'updated',
        )

    # name = serializers.ReadOnlyField()
    # name_truncated = serializers.ReadOnlyField()
    # width = serializers.ReadOnlyField()
    # height = serializers.ReadOnlyField()
    # size = serializers.ReadOnlyField()
