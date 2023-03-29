import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}
  create(createContactDto: CreateContactDto) {
    const newContact = this.contactRepository.create({
      ...createContactDto,
      createdAt: new Date(),
    });

    return this.contactRepository.save(newContact);
  }

  findAll() {
    return this.contactRepository.find();
  }
}
