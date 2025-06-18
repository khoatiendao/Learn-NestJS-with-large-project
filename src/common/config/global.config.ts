import * as dotenv from 'dotenv';
dotenv.config()

const globalConfig = {
    enviroment: process.env.NODE_ENV,
    port: process.env.PORT || 2000,

    database: {
        type: process.env.DB_TYPE,
        name: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    }

}

export default globalConfig;