import { INVOICE_PROVIDER } from 'src/constant';
import { InvoiceEntity } from '../entity/invoice.entity';

export const invoiceProvider = [
  {
    provide: INVOICE_PROVIDER,
    useValue: InvoiceEntity,
  },
];
