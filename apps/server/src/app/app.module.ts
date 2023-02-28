import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from '../../../../ormconfig';

const IMPORTED_MODULES = [UserModule];
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    ...IMPORTED_MODULES,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
