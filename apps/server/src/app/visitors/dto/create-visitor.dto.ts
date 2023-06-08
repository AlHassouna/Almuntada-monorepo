import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsIP, IsString, IsOptional} from "class-validator";
import {Country} from '../entities/country.entity';

export class CreateVisitorDto {
  @ApiProperty()
  @IsOptional()
  @IsIP()
  ip: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pathname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userAgent: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: Array<object>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  languages: string;
}
