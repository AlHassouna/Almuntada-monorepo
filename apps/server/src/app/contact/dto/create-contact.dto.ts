import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateContactDto {
  @ApiProperty({
    description: 'The Full Name of the Contact',
    example: 'The Full Name',
  })

  @IsNotEmpty()
  FullName: string;


  @ApiProperty({
    description: 'The Email of the Contact',
    example: 'The Email',
  })

  @IsEmail()
  Email: string;

  @ApiProperty({
    description: 'The Subject of the Contact',
    example: 'The Subject',
  })

  @IsNotEmpty()
  Subject: string;


  @ApiProperty({
    description: "The Message of the Contact",
    example : "The Message"
  })
  @IsNotEmpty()
  Message: string


}
