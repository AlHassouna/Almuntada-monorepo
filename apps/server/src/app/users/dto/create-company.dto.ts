import {ApiProperty} from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty()
  company: string;
}
