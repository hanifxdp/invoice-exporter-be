import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity';
import { PRODUCT_PROVIDER } from 'src/constant';
import { CreateProductDto } from './dto/product.dto';
import { Sequelize } from 'sequelize';
import { ItemEntity } from 'src/invoices/entity/item.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_PROVIDER)
    private productsRepository: typeof ProductEntity,
  ) {}

  async findProducts(): Promise<ProductEntity[]> {
    const total = ProductEntity.count();
    const data = this.productsRepository.findAll({
      subQuery: false,
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('product.item')), 'product.id'],
        ],
      },
      include: [
        {
          model: ItemEntity,
          attributes: [],
        },
      ],
      group: ['product.item'],
    });
    return data;
  }
  async create(products: CreateProductDto) {
    return await this.productsRepository.create({ ...products });
  }
  async findOneProduct(id: number) {
    return await this.productsRepository.findOne({ where: { id } });
  }
}
