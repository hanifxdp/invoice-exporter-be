import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interface/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER_DEVELOPMENT,
        password: process.env.DB_PASS_DEVELOPMENT,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST_DEVELOPMENT,
        port: process.env.DB_PORT_DEVELOPMENT,
        dialect: process.env.DB_DIALECT_DEVELOPMENT,
    },
    staging: {
        username: process.env.DB_USER_STAGING,
        password: process.env.DB_PASS_STAGING,
        database: process.env.DB_NAME_STAGING,
        host: process.env.DB_HOST_STAGING,
        port: process.env.DB_PORT_STAGING,
        dialect: process.env.DB_DIALECT_STAGING,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    },
};