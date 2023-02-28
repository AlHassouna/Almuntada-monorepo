import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.animalRepository.create({
      ...createUserDto,
      createdAt: new Date(),
    });
    return this.animalRepository.save(newUser);
  }

  findAll() {
    return this.animalRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
