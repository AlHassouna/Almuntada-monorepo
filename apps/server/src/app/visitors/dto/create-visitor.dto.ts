import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsIP} from 'class-validator';

export class CreateVisitorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIP()
  ip: string;

  @ApiProperty()
  @IsNotEmpty()
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
  is_Vpn: boolean;
}
