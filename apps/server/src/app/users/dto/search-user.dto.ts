import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsOptional, IsString} from "class-validator";


export class SearchUserDto {
  @ApiProperty()
  @IsString()

  @IsOptional()
  firstName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()

  lastName?: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsOptional()

  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  degree?: string;

  @ApiProperty()
  @IsOptional()
  subject?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()

  career?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()

  city?: string;


  @ApiProperty()
  @IsString()
  @IsOptional()
  sex?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty()
  @IsOptional()
  isApproved?: boolean
}
