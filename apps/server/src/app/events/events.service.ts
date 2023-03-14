import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Event} from './entities/event.entity'
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly eventsRepository:Repository<Event>
  ) {
  }
  create(createEventDto: CreateEventDto) {
   const newEvent = this.eventsRepository.create({
     ...createEventDto,
     createdAt:new Date()
   })
    return this.eventsRepository.save(newEvent)
  }

  findAll() {
    return this.eventsRepository.find()
  }



}
