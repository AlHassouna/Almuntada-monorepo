import {Module} from '@nestjs/common';
import {UserModule} from './users/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PodcastsModule} from './podcasts/podcasts.module';
import {ContactModule} from "./contact/contact.module";
import {typeOrmAsyncConfig} from "./config/typeorm.config";

@Module({
  imports: [
    UserModule,
    PodcastsModule,
    ContactModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
