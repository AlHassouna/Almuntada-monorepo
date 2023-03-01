import { Module } from '@nestjs/common';
// import { AnimalModule } from './animals/animal.module';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import ormconfig from '../../../../ormconfig';

// const IMPORTED_MODULES = [AnimalModule];
@Module({
  imports: [
    // ConfigModule.forRoot(),
    // TypeOrmModule.forRoot(ormconfig),
    // ...IMPORTED_MODULES,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
