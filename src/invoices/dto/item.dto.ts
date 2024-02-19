import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import{IsArray, ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'

export class CreateItemDto{
    id: number
    @ApiProperty({default: 1})
    productId: number
    @ApiProperty({default: 1})
    quantity: number
}

export class CreateItemsDto{
    @IsArray()
    @ValidateNested()
    @ApiPropertyOptional({isArray: true, type: CreateItemDto})
    @Type(()=> CreateItemDto)
    items: CreateItemDto[]
}