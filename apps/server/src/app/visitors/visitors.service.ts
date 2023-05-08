import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateVisitorDto} from './dto/create-visitor.dto';
import {Visitor} from "./entities/visitor.entity";
import * as winston from 'winston';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(Visitor) private readonly visitorRepository: Repository<Visitor>
  ) {
  }

  create(createVisitorDto: CreateVisitorDto) {
    const newVisitor = this.visitorRepository.create({
      ...createVisitorDto,
      createdAt: new Date()
    })
    return this.visitorRepository.save(newVisitor)
  }

  findAll() {
    return this.visitorRepository.find()
  }

}
