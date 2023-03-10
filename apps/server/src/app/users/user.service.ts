import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { SearchTermDto } from './dto/search-term.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUserDto,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  findAll() {
    console.log('in find all');
    return this.userRepository.find();
  }

  findOne(id: number) {
    console.log('in find id');

    return `This action returns a #${id} user`;
  }

  findUsersBySearchTerms(searchTerms: SearchTermDto) {
    console.log('in find search');

    return this.userRepository.find({
      where: {
        city: searchTerms.city,
        subject: searchTerms.subject,
      },
    });
  }
}
