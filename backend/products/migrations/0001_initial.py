# Generated by Django 4.2.8 on 2024-01-27 20:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_name', models.CharField(max_length=128, unique=True)),
                ('slug', models.SlugField(max_length=128, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Colour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('colour', models.CharField(max_length=64, unique=True)),
                ('slug', models.SlugField(max_length=64, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=255, unique=True)),
                ('product_description', models.TextField()),
                ('prod_slug', models.SlugField(max_length=255, unique=True)),
                ('whom_assigned', models.IntegerField(choices=[(-1, 'Men'), (1, 'Women'), (0, 'kids')], default=1, verbose_name='whom assigned')),
                ('special_offer', models.BooleanField(default=False)),
                ('new_arrival', models.BooleanField(default=True)),
                ('prod_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=7)),
                ('product_brand', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='products', to='products.brand')),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(max_length=50, unique=True)),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('files', models.FileField(blank=True, default=None, null=True, upload_to='static/products/', verbose_name='Images')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='images', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_category', models.CharField(max_length=128, unique=True)),
                ('slug', models.SlugField(max_length=128, unique=True)),
                ('parent_category_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.productcategory')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='product_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='products', to='products.productcategory'),
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itm_slug', models.SlugField(max_length=255, unique=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('stock', models.PositiveIntegerField()),
                ('date_of_addition', models.DateTimeField(auto_now=True)),
                ('is_available', models.BooleanField(default=True)),
                ('colour', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='items', to='products.colour')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='items', to='products.product')),
                ('size', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='items', to='products.size')),
            ],
            options={
                'ordering': ('-date_of_addition',),
            },
        ),
    ]
