import { Inject, Injectable } from '@nestjs/common';
import { InvoiceEntity } from './entity/invoice.entity';
import {
  CreateInvoiceDto,
  FindInvoiceDto,
  FindOneInvoiceDto,
  UpdateInvoiceDto,
} from './dto/invoice.dto';
import { ItemEntity } from './entity/item.entity';
import { INVOICE_PROVIDER } from 'src/constant';

@Injectable()
export class InvoicesService {
  constructor(
    @Inject(INVOICE_PROVIDER)
    private invoiceRepository: typeof InvoiceEntity,
  ) {}

  async createInvoice(invoice: CreateInvoiceDto) {
    return await this.invoiceRepository.create({
      ...invoice,
      include: [ItemEntity],
    });
  }

  async findAllInvoice(query: FindInvoiceDto) {
    return this.invoiceRepository.findAll({
      where: { ...query },
      include: [ItemEntity],
    });
  }

  async findOne(id: number, query: FindOneInvoiceDto): Promise<InvoiceEntity> {
    return await this.invoiceRepository.findOne<InvoiceEntity>({
      where: { id, ...query },
      // include: [ItemEntity],
    });
  }

  async findByUUID(uuid: string) {
    return await this.invoiceRepository.findOne({
      where: { uuid },
      include: [ItemEntity],
    });
  }

  async updateInvoice(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoiceData = this.invoiceRepository.update(updateInvoiceDto, {
      where: {
        id,
      },
      returning: true,
    });
    return invoiceData;
  }
}
