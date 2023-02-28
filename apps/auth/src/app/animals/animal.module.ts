import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { UserController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '@myworkspace/pgsql';
import { Animal } from './entities/animal.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Animal]), DatabaseModule],
  controllers: [UserController],
  providers: [AnimalService],
})
export class AnimalModule {}
