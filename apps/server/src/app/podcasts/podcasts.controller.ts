import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import {PodcastsService} from './podcasts.service';
import {CreatePodcastDto} from './dto/create-podcast.dto';
import {S3Client, ListObjectsV2Command} from "@aws-sdk/client-s3"
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import * as process from "process";

const config = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
}

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

  @Get('fromS3')
  async getPodcastsKeyFromS3() {
    try {
      const s3 = new S3Client(config);
      const command = new ListObjectsV2Command({
        Bucket: process.env.AWS_BUCKET_NAME,
      });
      const data = await s3.send(command);
      const createPodcast = {
        title: data.Contents[0].Key,
        podcastUrl: process.env.AWS_CLOUDFRONT_URL + data.Contents[0].Key,
      }
      return this.create(createPodcast);
    } catch (e) {
      console.log(e);
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.podcastsService.findOne(+id);
  }
}
