import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Elias Salom',
  })
  @IsNotEmpty({ message: 'The name is required' })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'elias.29@hotmail.com',
  })
  @IsEmail({
    allow_display_name: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: '123456',
  })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;
}
