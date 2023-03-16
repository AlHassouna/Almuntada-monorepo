import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto';
import {User} from './entities/user.entity';
import {SearchTermDto} from './dto/search-term.dto';
import {Subject} from "./entities/subject.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Subject) private readonly subjectRepository: Repository<Subject>
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const {subject} = createUserDto;
    const newSubject = this.subjectRepository.create({subject})
    const createdSubject = await this.subjectRepository.save(newSubject);
    const user = this.userRepository.create({...createUserDto, subject: createdSubject});
    return this.userRepository.save(user);
  }


  findAll() {
    return this.userRepository.find({
      relations: {
        subject: true
      }
    });
  }

  // findOne(id: number) {
  //   return this.userRepository.find({where: {id}});
  // }

  async findAllSubjects(): Promise<Subject[]> {
    return await this.subjectRepository.find();
  }


  // findUsersBySearchTerms(searchTerms: SearchTermDto) {
  //   const {subject, city} = searchTerms;
  //   return this.userRepository.find({
  //     where: [
  //       {subject: subject},
  //       {city: city}
  //     ]
  //   });

  // }
}
