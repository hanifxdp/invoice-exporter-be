import { Inject, Injectable } from "@nestjs/common";
import { ItemEntity } from "./entity/item.entity";
import { CreateItemDto, CreateItemsDto } from "./dto/item.dto";
import { ITEMS_PROVIDER } from "src/constant";

@Injectable()
export class ItemService{
    constructor(
        @Inject(ITEMS_PROVIDER)
        private itemRepository : typeof ItemEntity
    ){}
        
    async createItemList(createItemDto: CreateItemDto[]): Promise<ItemEntity> {
        console.log(createItemDto, "<<<<item")
        const item = await this.itemRepository.create({createItemDto});
        return item
    }
}