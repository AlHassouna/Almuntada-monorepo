import {
  Controller,
  Post,
  Body, Get,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('Contact-Us')
@Controller('contact')

export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  async getContacts() {
    return await this.contactService.findAll();
  }


}
