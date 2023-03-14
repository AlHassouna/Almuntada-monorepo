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
  device: string;

  @ApiProperty()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  count_visits: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  is_Vpn: boolean;
}
