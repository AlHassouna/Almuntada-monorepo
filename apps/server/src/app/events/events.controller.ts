import {
    Controller,
    Get,
    Post,
    Body, Put, Query, Param,
} from '@nestjs/common';
import {EventsService} from './events.service';
import {CreateEventDto} from './dto/create-event.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {
    }

    @Post()
    create(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.create(createEventDto);
    }

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get('isActive/:isActiveValue')
    async getPodcastByIsActive(@Param('isActiveValue') isActiveValue: boolean) {
        return await this.eventsService.getEventByIsActive(isActiveValue);
    }

    @Put()
    async updateUser(@Query() id, @Body() data) {
        return await this.eventsService.updateEvent(id, data);
    }

}
