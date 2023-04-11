import {ApiProperty} from '@nestjs/swagger';

export class SubjectDto {
  @ApiProperty()
  subject: string;
}
