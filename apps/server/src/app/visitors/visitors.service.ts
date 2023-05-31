import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateVisitorDto} from './dto/create-visitor.dto';
import {Visitor} from "./entities/visitor.entity";

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(Visitor) private readonly visitorRepository: Repository<Visitor>
  ) {
  }

  create(createVisitorDto: CreateVisitorDto) {
    //     const {ip,pathname,userAgent,location} = createVisitorDto;
    //     const subjectEntity = await this.subjectRepository.findOne({where: {subject}}) || this.subjectRepository.create({subject});
    //     const savedSubject = await this.subjectRepository.save(subjectEntity);
    //
    //     const companyEntity = await this.companyRepository.findOne({where: {company}}) || this.companyRepository.create({company});
    //     const savedCompany = await this.companyRepository.save(companyEntity);
    //
    //     const careerEntity = await this.careerRepository.findOne({where: {career}}) || this.careerRepository.create({career});
    //     const savedCareer = await this.careerRepository.save(careerEntity);
    //     createUserDto.phone = btoa(createUserDto.phone);
    //     const newUser = this.academicRepository.create({
    //       ...createUserDto,
    //       subject: savedSubject,
    //       company: savedCompany,
    //       career: savedCareer
    //     });
    //
    //     return await this.academicRepository.save(newUser);
    const newVisitor = this.visitorRepository.create({
      ...createVisitorDto,
      createdAt: new Date()
    })
    return this.visitorRepository.save(newVisitor)
  }

  findAll() {
    return this.visitorRepository.find()
  }
  async getCountriesCounter(){

  }
  getVisitorsCounter(){

  }

}
