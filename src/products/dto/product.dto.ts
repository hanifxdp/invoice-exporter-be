import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ default: 'defaultProductName' })
  productName: string;
  @ApiProperty({ default: 1000 })
  productPrice: number;
  @ApiProperty({default: "url-image"})
  image: string;
}

export class UpdateProductDto {
  @ApiProperty({ default: 'defaultProductName' })
  productName: string;
  @ApiProperty({ default: 1000 })
  productPrice: number;
  @ApiProperty({default: "url-image"})
  image: string;
}
