import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './products/products.controller';
import { InvoiceController } from './invoices/invoices.controller';
import { AuthController } from './auth/auth.controller';
import { ProductModule } from './products/product.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { InvoicesService } from './invoices/invoices.service';
import { invoiceProvider } from './invoices/providers/invoices.provider';
import { ProductsService } from './products/products.service';
import { productProviders } from './products/providers/products.providers';
import { itemProvider } from './invoices/providers/items.provider';
import { InvoicesModule } from './invoices/invoices.module';
import { ItemService } from './invoices/items.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ProductModule,
    DatabaseModule,
    InvoicesModule,
  ],
  controllers: [
    AppController,
    AuthController,
    AppController,
    InvoiceController,
    ProductsController,
  ],
  providers: [
    AppService,
    ...invoiceProvider,
    InvoicesService,
    ...productProviders,
    ProductsService,
    ...itemProvider,
    InvoicesService,
    ItemService
  ],
})
export class AppModule {}
