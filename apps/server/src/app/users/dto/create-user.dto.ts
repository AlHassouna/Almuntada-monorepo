import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateUserDto {
  // First Name //

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'The image url is required' })
  imageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(18)
  @Max(70)
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  degree: string;

  @ApiProperty()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  career: string;

  @ApiProperty()
  @IsNotEmpty()
  city: string;
}
