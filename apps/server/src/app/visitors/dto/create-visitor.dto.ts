import {ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsIP, IsString, IsOptional } from "class-validator";

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
  location: string;
}
