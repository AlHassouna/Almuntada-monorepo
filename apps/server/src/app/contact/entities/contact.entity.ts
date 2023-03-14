import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Contact {

@ApiProperty({
  description: 'The Full Name of the Contact',
  example: 'The Full Name',
})

@IsNotEmpty({ message: 'The Full Name is required' })
  fullName: string;
}
