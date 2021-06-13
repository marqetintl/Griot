# Generated by Django 3.2.2 on 2021-06-10 15:28

import apps.documents.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sites', '0002_alter_domain_unique'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=100, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='creation date and time')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='update date and time')),
                ('src', models.FileField(help_text='Select a file', upload_to=apps.documents.models.upload_to, verbose_name='File')),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='sites.site')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'File',
                'verbose_name_plural': 'Files',
                'ordering': ('-created', '-updated'),
            },
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('file_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='documents.file')),
                ('title', models.CharField(blank=True, max_length=400, null=True, verbose_name='Title')),
            ],
            options={
                'verbose_name': 'Document',
                'verbose_name_plural': 'Documents',
                'ordering': ('-created', 'title'),
            },
            bases=('documents.file',),
        ),
        migrations.CreateModel(
            name='FileShared',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=100, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='creation date and time')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='update date and time')),
                ('file', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shared_meta', to='documents.file')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shared_meta', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='file',
            name='users',
            field=models.ManyToManyField(blank=True, through='documents.FileShared', to=settings.AUTH_USER_MODEL),
        ),
    ]
