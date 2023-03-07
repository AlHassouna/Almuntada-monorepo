import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // First Name //

  @ApiProperty({
    description: 'The first name of the user',
    example: 'Hassan',
  })
  @IsNotEmpty({ message: 'The First Name is required' })
  firstName: string;

  // Last Name //
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Hassouna',
  })
  @IsNotEmpty({ message: 'The Last Name is required' })
  secondName: string;

  // Email //

  @ApiProperty({
    description: 'The email of the user',
    example: 'example@gmail.com',
  })
  @IsEmail({
    allow_display_name: true,
  })
  email: string;

  // Image //

  @ApiProperty({
    description: 'The image url of the user',
  })
  @IsNotEmpty({ message: 'The image url is required' })
  image: string;

  // Age //

  @ApiProperty({
    description: 'The age of the user',
  })
  @IsNotEmpty({
    message: 'The age is required',
  })
  age: number;

  // Degree //

  @ApiProperty({
    description: 'The degree of the user',
  })
  @IsNotEmpty({
    message: 'The degree is required',
  })
  degree: string;

  // Subject //

  @ApiProperty({
    description: 'The subject of the user',
  })
  @IsNotEmpty({
    message: 'The subject is required',
  })
  subject: string;

  // Career //

  @ApiProperty({
    description: 'The career of the user',
  })
  @IsNotEmpty({
    message: 'The career is required',
  })
  career: string;
  // City //

  @ApiProperty({
    description: 'The city of the user',
  })
  @IsNotEmpty({
    message: 'The city is required',
  })
  city: string;
}
