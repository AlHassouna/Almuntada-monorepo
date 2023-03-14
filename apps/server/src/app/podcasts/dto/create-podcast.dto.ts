import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePodcastDto {
  // Title //

  @ApiProperty({
    description: 'The title of the podcast',
    example: 'The Title',
  })
  @IsNotEmpty()
  title: string;

  // Description //

  @ApiProperty({
    description: 'The description of the podcast',
    example: 'The Description',
  })
  @IsNotEmpty()
  description: string;
å
  // Podcast Url //

  @ApiProperty({
    description: 'The podcast url of the podcast',
    example: 'The Podcast Url',
  })
  @IsNotEmpty()
  podcastUrl: string;
}
