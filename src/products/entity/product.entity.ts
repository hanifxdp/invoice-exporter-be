import sequelize from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  UpdatedAt,
} from 'sequelize-typescript';
import { ItemEntity } from 'src/invoices/entity/item.entity';

@Table({ tableName: 'Product' })
export class ProductEntity extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productPrice: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @HasMany(() => ItemEntity)
  items: ItemEntity['id'];

  @Column({
    type: DataType.DATE,
    defaultValue: sequelize.NOW,
  })
  createdAt?: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedAt?: Date;
}
