import {TypeOrmModuleOptions} from '@nestjs/typeorm';

const {DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST} = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: 5432,
  host: DB_HOST,
  database: DB_NAME,
  autoLoadEntities: false,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
};
