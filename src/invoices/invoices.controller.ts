import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Put,
  Get,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  CreateInvoiceDto,
  FindInvoiceDto,
  FindOneInvoiceDto,
  UpdateInvoiceDto,
} from './dto/invoice.dto';
import { Public } from 'src/auth/decorator/public_decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InvoicesService } from './invoices.service';
import { CreateItemDto, CreateItemsDto } from './dto/item.dto';
import { ItemService } from './items.service';

@UseGuards()
@ApiBearerAuth()
@ApiTags('/invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly itemService: ItemService,
  ) {}

  @Public()
  @Get()
  findAll(@Query() query: FindInvoiceDto) {
    return this.invoicesService.findAllInvoice(query);
  }
  @Get(':id')
  findOne(@Param('id') id: number, @Query() query: FindOneInvoiceDto) {
    return this.invoicesService.findOne(id, query);
  }
  @Get(':uuid')
  find(@Param('uuid') uuid: string) {
    return this.invoicesService.findByUUID(uuid);
  }
  @Public()
  @Post('create')
  @HttpCode(201)
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    const invoice = this.invoicesService.createInvoice(createInvoiceDto);
    return invoice;
  }

  @Public()
  @Put(`create/item`)
  @HttpCode(201)
  createItem(@Body() { items }: CreateItemsDto) {
    console.log(items, '<<<wdwada');
    const item = this.itemService.createItemList(items); //! error, the item.quantity is not pushed to db
    return item;
  }

  @UseGuards()
  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    const invoice = this.invoicesService.updateInvoice(id, updateInvoiceDto);
    return invoice;
  }
}
