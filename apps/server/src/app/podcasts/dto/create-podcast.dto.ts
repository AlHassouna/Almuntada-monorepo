import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsString} from 'class-validator';

export class CreatePodcastDto {
  // Title //

  @ApiProperty({
    description: 'The title of the podcast',
    example: 'The Title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  // Index Url //
  @ApiProperty({
    description: 'The podcast url of the podcast',
    example: 'The Index Url',
  })
  @IsNotEmpty()
  @IsString()
  podcastUrl: string;


  // Index Url //
  @ApiProperty({
    description: 'The IsActive of the podcast',
    example: 'false',
  })
  @IsBoolean()
  isActive: boolean;

}
