import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, IsUrl, Max, Min} from 'class-validator';
import {Type} from 'class-transformer';
import {SubjectDto} from "./create-subject.dto";
import {CompanyDto} from "./create-company.dto";
import {CareerDto} from "./create-career.dto";

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
  subject: string;

  @ApiProperty()

  career: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  city: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isAgree: boolean;

}
