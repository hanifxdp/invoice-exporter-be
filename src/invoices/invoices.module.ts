import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoiceController } from './invoices.controller';
import { InvoiceEntity } from './entity/invoice.entity';
import { ItemEntity } from './entity/item.entity';
import { invoiceProvider } from './providers/invoices.provider';
import { itemProvider } from './providers/items.provider';
import { ItemService } from './items.service';

@Module({
  imports: [InvoiceEntity, ItemEntity],
  providers: [InvoicesService, ItemService, ...itemProvider, ...invoiceProvider],
  controllers: [InvoiceController],
  // exports: [InvoicesService],
})
export class InvoicesModule {}
