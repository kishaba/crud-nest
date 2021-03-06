import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductResolver } from './product.resolve';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
