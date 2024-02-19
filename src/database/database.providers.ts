import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT,STAGING, TEST, PRODUCTION } from '../constant';
import { ProductEntity } from 'src/products/entity/product.entity';
import { InvoiceEntity } from 'src/invoices/entity/invoice.entity';
import { databaseConfig } from './database.config';
import { ItemEntity } from 'src/invoices/entity/item.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: object;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case STAGING :
          config = databaseConfig.staging
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([InvoiceEntity, ProductEntity, ItemEntity]);
      await sequelize.sync({ force: true });
      console.log('All models were sync successfully');
      await sequelize.authenticate();
      console.log('Connection has been established successfully');
      return sequelize;
    },
  },
];
