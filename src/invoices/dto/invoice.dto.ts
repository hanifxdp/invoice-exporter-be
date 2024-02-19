import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  PaymentMethodType,
  ShippingMethodType,
  StatusType,
} from 'src/constant';

export class CreateInvoiceDto {
  id: number;
  @ApiProperty({ default: 'john' })
  customerName: string;
  @ApiProperty({ default: '0821424634' })
  phoneNumber: number;
  @ApiProperty({ default: new Date().toISOString().split('T')[0] })
  date: Date;
  @ApiProperty({ enum: PaymentMethodType })
  payment: PaymentMethodType;
  @ApiProperty({ enum: ShippingMethodType })
  shipping: ShippingMethodType;
  @ApiProperty({ enum: StatusType })
  status: StatusType;
  @ApiProperty({default: '1'})
  items: number
}

export class UpdateInvoiceDto {
  @ApiProperty({ enum: PaymentMethodType })
  payment: PaymentMethodType;
  @ApiProperty({ enum: ShippingMethodType })
  shipping: ShippingMethodType;
  @ApiProperty({ enum: StatusType })
  status: StatusType;
}

export class FindOneInvoiceDto {
  uuid: string;
  customerName: string;
  phoneNumber: number;
  date: string;
  payment: string;
  shipping: string;
  status: string;
  items: string;
  productId: number;
}

export class FindInvoiceDto {
  @ApiPropertyOptional({
    default: 'uuid, customerName',
    description: 'Can be only search with uuid and customerName',
  })
  searchBy?: string;
  @ApiPropertyOptional({ enum: StatusType })
  filterByStatus?: StatusType;
}
