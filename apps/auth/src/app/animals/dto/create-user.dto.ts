import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'The name is required' })
  name: string;

  @IsNotEmpty({ message: 'The type is required' })
  type: string;
}
