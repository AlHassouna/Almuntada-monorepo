import {ApiProperty} from '@nestjs/swagger';
import {IsOptional} from 'class-validator';

export class SearchTermDto {
  @ApiProperty({})
  @IsOptional({message: 'The Subject is required'})
  subject: string;

  @ApiProperty({})
  @IsOptional({message: 'The City is required'})
  city: string;
}
