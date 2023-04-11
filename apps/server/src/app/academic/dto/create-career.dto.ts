import {ApiProperty} from '@nestjs/swagger';

export class CareerDto {
  @ApiProperty()
  career: string;
}
