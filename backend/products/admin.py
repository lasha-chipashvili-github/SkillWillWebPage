from django.contrib import admin
from django.utils.html import format_html

from .models import (
    Brand,
    ProductCategory,
    Product,
    Size,
    Colour,
    Item,
    ProductImage
)


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {"prod_slug": ("product_name",)}


admin.site.register(Product, ProductAdmin)


class ItemAdmin(admin.ModelAdmin):
    prepopulated_fields = {'itm_slug': ('product', 'size', 'colour')}
    list_filter = ('product',)
    list_display = ('item_description',)

    def item_description(self, obj):
        return f"{obj.product.product_name},  {obj.colour},  {obj.size},  {obj.stock} ც. "


admin.site.register(Item, ItemAdmin)


class BrandAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("brand_name",)}


admin.site.register(Brand, BrandAdmin)


class SizeAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("size",)}


admin.site.register(Size, SizeAdmin)


class ProductCategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("product_category",)}


admin.site.register(ProductCategory, ProductCategoryAdmin)


class ColourAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("colour",)}

admin.site.register(Colour, ColourAdmin)


class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('display_image', 'display_file_name', 'product')
    list_filter = ('product',)

    def display_image(self, obj):
        return format_html('<img src="{}" width="50" height="50" />'.format(obj.files.url))

    def display_file_name(self, obj):
        return obj.files.name

    display_image.short_description = 'Image'
    display_file_name.short_description = 'File Name'

admin.site.register(ProductImage, ProductImageAdmin)
# admin.site.register(ItemImage)
