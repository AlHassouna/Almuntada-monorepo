import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePodcastDto {
  // Title //

  @ApiProperty({
    description: 'The title of the podcast',
    example: 'The Title',
  })
  @IsNotEmpty({ message: 'The Title is required' })
  title: string;

  // Description //

  @ApiProperty({
    description: 'The description of the podcast',
    example: 'The Description',
  })
  @IsNotEmpty({ message: 'The Description is required' })
  description: string;

  // Index Url //

  @ApiProperty({
    description: 'The podcast url of the podcast',
    example: 'The Index Url',
  })
  @IsNotEmpty({ message: 'The Index Url is required' })
  podcastUrl: string;
}
