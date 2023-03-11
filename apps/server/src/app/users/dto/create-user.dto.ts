import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsNumber()
  @Min(18)
  @Max(70)
  @Type(() => Number)
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
