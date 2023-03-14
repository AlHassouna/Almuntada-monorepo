import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
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
  @IsNotEmpty()
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
