import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateContactDto {
  @ApiProperty({
    description: 'The Full Name of the Contact',
    example: 'The Full Name',
  })

  @IsNotEmpty({ message: 'The Full Name is required' })
  FullName: string;


  @ApiProperty({
    description: 'The Email of the Contact',
    example: 'The Email',
  })

  @IsNotEmpty({ message: 'The Email is required' })
  Email: string;



  @ApiProperty({
    description: 'The Subject of the Contact',
    example: 'The Subject',
  })

  @IsNotEmpty({ message: 'The Subject is required' })
  Subject: string;


  @ApiProperty({
    description: "The Message of the Contact",
    example : "The Message"
  })
  @IsNotEmpty({message: "The Nessage is required"})

  Message: string


}
