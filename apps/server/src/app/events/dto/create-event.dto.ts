import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsNotEmpty} from 'class-validator';

export class CreateEventDto {
  @ApiProperty({
    description: 'The name of the event',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The organizer of the event',
  })
  @IsNotEmpty()
  organizer: string;

  @ApiProperty({
    description: 'The location of the event',
  })
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'The information of the event',
  })
  @IsNotEmpty()
  information: string;


  @ApiProperty({
    description: 'The date of the event',
  })

  @IsDate()
  dateOfEvent: Date

}
