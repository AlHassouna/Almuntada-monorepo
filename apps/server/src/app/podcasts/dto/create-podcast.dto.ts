import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';

export class CreatePodcastDto {
  // Title //

  @ApiProperty({
    description: 'The title of the podcast',
    example: 'The Title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  // Description //

  @ApiProperty({
    description: 'The description of the podcast',
    example: 'The Description',
  })
  @IsNotEmpty()
  @IsString()

  description: string;


  // Index Url //


  @ApiProperty({
    description: 'The podcast url of the podcast',
    example: 'The Index Url',
  })

  @IsNotEmpty()
  @IsString()
  podcastUrl: string;
}
