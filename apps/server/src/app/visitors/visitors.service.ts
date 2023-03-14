import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import {Visitor} from "./entities/visitor.entity";

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

  findOne(id: number) {
    return this.visitorRepository.find({where: {id}})
  }


}
