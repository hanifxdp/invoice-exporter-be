import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productProviders } from './providers/products.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...productProviders],
  exports: [...productProviders]
})
export class ProductModule {}
