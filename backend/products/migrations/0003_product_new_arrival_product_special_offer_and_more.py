# Generated by Django 4.2.8 on 2024-01-12 08:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_rename_sulg_size_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='new_arrival',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='product',
            name='special_offer',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='product',
            name='whom_assigned',
            field=models.IntegerField(choices=[(-1, 'Men'), (1, 'Women'), (0, 'kids')], default=1, verbose_name='whom assigned'),
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('files', models.FileField(blank=True, default=None, null=True, upload_to='static/products/', verbose_name='Images')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('files', models.FileField(blank=True, default=None, null=True, upload_to='static/items/', verbose_name='Images')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='products.item')),
            ],
        ),
    ]
