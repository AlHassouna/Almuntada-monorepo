import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsNotEmpty, IsString} from 'class-validator';
import {Type} from "class-transformer";

export class CreateEventDto {
    @ApiProperty({
        description: 'The name of the event',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'The organizer of the event',
    })
    @IsNotEmpty()
    @IsString()
    organizer: string;

    @ApiProperty({
        description: 'The location of the event',
    })
    @IsNotEmpty()
    @IsString()

    location: string;

    @ApiProperty({
        description: 'The information of the event',
    })
    @IsNotEmpty()
    @IsString()
    information: string;


    @ApiProperty({
        description: 'The date of the event',
    })
    @Type(() => Date)
    dateOfEvent: string


    @IsNotEmpty()
    @IsString()
    image: string
}
