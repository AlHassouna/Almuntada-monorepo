import { ApiProperty } from '@nestjs/swagger';
import {IsArray, IsNotEmpty} from 'class-validator';
export class CreateEventDto {

  @ApiProperty(
    {
      description: 'The name of the event'
    }
  )
  @IsNotEmpty()
  name:string

@ApiProperty(
  {
    description: 'The organizer of the event'
  }
)
@IsNotEmpty()
        @IsArray()
organizer:string
}
