import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe, Put, Query, Delete,
} from '@nestjs/common';
import {PodcastsService} from './podcasts.service';
import {CreatePodcastDto} from './dto/create-podcast.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Podcasts')
@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has not been created.',
  })
  create(@Body() createPodcastDto: CreatePodcastDto) {

    return this.podcastsService.create(createPodcastDto);
  }


  @Get()
  async getPodcasts() {
    const podcasts = await this.podcastsService.findAll();
    return podcasts;
  }

  @Post(':id/:title')
  async findOne(@Param('id') id: string, @Param('title') title: string) {
    const createPodcast = {
      title: title,
      podcastUrl: process.env.AWS_CLOUDFRONT_URL + "Episode" + id + ".mp4",
      isActive: false
    }
    return this.create(createPodcast);
  }

  @Put()
  async updateUser(@Query() id, @Body() data) {
    return await this.podcastsService.updatePodcast(id, data);
  }

  @Get('isActive/:isActiveValue')
  async getPodcastByIsActive(@Param('isActiveValue') isActiveValue: boolean) {
    return await this.podcastsService.getPodcastByIsActive(isActiveValue);
  }

  @Delete()
  async deleteAllPodcasts() {
    return await this.podcastsService.deleteAllPodcasts();
  }
}
