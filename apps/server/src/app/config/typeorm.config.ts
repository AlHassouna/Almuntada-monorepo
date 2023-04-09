import {ConfigModule, ConfigService} from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      port: 5432,
      host: configService.get('DB_HOST'),
      database: configService.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
    };
  },
};
