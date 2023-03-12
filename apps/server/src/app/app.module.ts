import {Module} from '@nestjs/common';
import {UserModule} from './users/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PodcastsModule} from './podcasts/podcasts.module';

// import typeOrmConfig from '../../../../ormconfig';

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);

@Module({
  imports: [
    UserModule,
    PodcastsModule,
    ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        port: 5432,
        host: configService.get('DB_HOST'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/../migrations/*.{js,ts}'],
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
