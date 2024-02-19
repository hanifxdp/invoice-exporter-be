import { ITEMS_PROVIDER } from 'src/constant';
import { ItemEntity } from '../entity/item.entity';

export const itemProvider = [
  {
    provide: ITEMS_PROVIDER,
    useValue: ItemEntity,
  },
];
