import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePimageDto {
  @ApiProperty({
    description: 'The title of the image',
    example: 'The Title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  // Index Url //

  @ApiProperty({
    description: 'The podcast url of the image',
    example: 'The Index Url',
  })

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
