# Generated by Django 5.0.6 on 2024-05-25 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0007_producto_discount_price_alter_categoria_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products/'),
        ),
    ]