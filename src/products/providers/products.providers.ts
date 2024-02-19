import { PRODUCT_PROVIDER } from 'src/constant';
import { ProductEntity } from '../entity/product.entity';

export const productProviders = [
  {
    provide: PRODUCT_PROVIDER,
    useValue: ProductEntity,
  },
];
