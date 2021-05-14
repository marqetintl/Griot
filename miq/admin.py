from django.contrib import admin

from .models import (
    Section,
    Image,
    Index, Page
)

admin.site.register(Image)
admin.site.register(Section)

admin.site.register(Index)
admin.site.register(Page)
