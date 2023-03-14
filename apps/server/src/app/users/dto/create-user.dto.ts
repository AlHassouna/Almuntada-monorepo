import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsNumber, IsString, IsUrl, Max, Min} from 'class-validator';
import {Type} from 'class-transformer';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsString()

  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  @Min(18)
  @Max(70)
  @Type(() => Number)
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  degree: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  career: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  city: string;
}
