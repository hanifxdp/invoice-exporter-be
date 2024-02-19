import { Body, Controller, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorator/public_decorator';
import { CreateProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@UseGuards()
@ApiBearerAuth()
@ApiTags('/products')
@Controller('product')
export class ProductsController {
  constructor(private readonly productsService : ProductsService){}

  @Public()
  @Get()
  findAll() {
    return this.productsService.findProducts();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOneProduct(id);
  }

  @Public()
  @Post('create')
  @HttpCode(201)
  async create(@Body() createProductDto : CreateProductDto){
    return this.productsService.create(createProductDto)
  }
}
