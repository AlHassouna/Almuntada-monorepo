import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Event} from './entities/event.entity'
import {DatabaseModule} from "@myworkspace/pgsql";
@Module({
  imports : [TypeOrmModule.forFeature([Event]),DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
