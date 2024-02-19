import sequelize from 'sequelize';
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';
import { ItemEntity } from './item.entity';

@Table({ tableName: 'Invoice' })
export class InvoiceEntity extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    unique: true,
  })
  uuid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customerName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @Column({
    type: DataType.DATEONLY,
    defaultValue: sequelize.NOW,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  shipping: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @ForeignKey(() => ItemEntity)
  items: string;

  @BelongsTo(() => ItemEntity)
  itemsId: ItemEntity;

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
