import { Body, Get, Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }
  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.productService.remove(id);
  }
}
