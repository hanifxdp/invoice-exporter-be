import {
  Model,
  Column,
  DataType,
  HasMany,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductEntity } from 'src/products/entity/product.entity';
import { InvoiceEntity } from './invoice.entity';

@Table({ tableName: 'Items' })
export class ItemEntity extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @ForeignKey(() => ProductEntity)
  productId: number;

  @BelongsTo(() => ProductEntity)
  ProductId: ProductEntity;

  @HasMany(() => InvoiceEntity)
  invoiceId: InvoiceEntity['id'];

  //satu product punya banyak ke invoice-item
  //satu invoice punya banyak ke invoice-item

}
