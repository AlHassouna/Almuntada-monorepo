import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { PodcastsService } from './podcasts.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Podcasts')
@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has not been created.',
  })
  create(@Body() createPodcastDto: CreatePodcastDto) {
    this.podcastsService.create(createPodcastDto);
  }

  @Get()
  async getPodcasts() {
    const podcasts = await this.podcastsService.findAll();
    return podcasts;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.podcastsService.findOne(+id);
  }
}
