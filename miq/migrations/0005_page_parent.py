# Generated by Django 3.2.2 on 2021-05-14 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('miq', '0004_auto_20210511_0913'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='miq.page'),
        ),
    ]