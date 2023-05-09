import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsIP, IsString, IsBoolean} from 'class-validator';

export class CreateVisitorDto {
  @ApiProperty()
  @IsNotEmpty()
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
  location: string;
}
