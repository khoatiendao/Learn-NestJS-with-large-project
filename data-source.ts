
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppEnvironment } from './src/common/enums/app.enums';

let config: DataSourceOptions & PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/migrations/*.js'],
};

switch (process.env.NODE_ENV) {
    case AppEnvironment.TEST:
        config = {
            ...config,
            logging: false,
            migrationsRun: true,
            entities: ['src/**/*.entity.ts'],
            migrations: ['dist/migrations/*.js'],
            host: process.env.TEST_DB_HOST,
            port: Number(process.env.TEST_DB_PORT),
            username: process.env.TEST_DB_USERNAME,
            password: process.env.TEST_DB_PASSWORD,
            database: process.env.TEST_DB_DATABASE,
        };
        break;

    case AppEnvironment.DEVELOPMENT:
        config = {
            ...config,
            synchronize: false,
            migrationsRun: true,
            logging: false,
        };
        break;

    case AppEnvironment.STAGE:
        config = {
            ...config,
            synchronize: false,
            migrationsRun: true,
            logging: false,
        };
        break;

    case AppEnvironment.PRODUCTION:
        config = {
            ...config,
            synchronize: false,
            migrationsRun: true,
            logging: false,
        };
        break;

    // default is local
    default:
        config = {
            ...config,
            synchronize: false,
            migrationsRun: false,
            logging: true,
        };
        break;
}

export const dataSource = new DataSource(config);
