import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodcastsModule } from './podcasts/podcasts.module';
import ormconfig from '../../../../ormconfig';

@Module({
  imports: [
    UserModule,
    PodcastsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
