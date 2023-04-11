import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { Academic } from "./entities/academic.entity";
import { Subject } from "./entities/subject.entity";
import { Company } from "./entities/company.entity";
import { Career } from "./entities/career.entity";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AcademicService {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
    @InjectRepository(Academic) private readonly academicRepository: Repository<Academic>,
    @InjectRepository(Subject) private readonly subjectRepository: Repository<Subject>,
    @InjectRepository(Company) private readonly companyRepository: Repository<Company>,
    @InjectRepository(Career) private readonly careerRepository: Repository<Career>
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const { subject, company, career } = createUserDto;
    const subjectEntity = await this.subjectRepository.findOne({ where: { subject } }) || this.subjectRepository.create({ subject });
    const savedSubject = await this.subjectRepository.save(subjectEntity);

    const companyEntity = await this.companyRepository.findOne({ where: { company } }) || this.companyRepository.create({ company });
    const savedCompany = await this.companyRepository.save(companyEntity);

    const careerEntity = await this.careerRepository.findOne({ where: { career } }) || this.careerRepository.create({ career });
    const savedCareer = await this.careerRepository.save(careerEntity);
    createUserDto.phone = btoa(createUserDto.phone);
    console.log(createUserDto.phone);
    const newUser = this.academicRepository.create({
      ...createUserDto,
      subject: savedSubject,
      company: savedCompany,
      career: savedCareer
    });

    return await this.academicRepository.save(newUser);

  }


  findAll() {
    return this.academicRepository.find({
      relations: {
        subject: true,
        career: true,
        company: true
      }
    });
  }

  async updateUser(id, data) {
    return await this.academicRepository.update(id, data);
  }

  async findAllSubjects(): Promise<Subject[]> {
    return await this.subjectRepository.find({
      relations: {
        user: true
      }
    });
  }

  async findAllCompanies(): Promise<Company[]> {
    return await this.companyRepository.find({
      relations: {
        user: true
      }
    });
  }

  async findAllCareers(): Promise<Career[]> {
    return await this.careerRepository.find({
      relations: {
        user: true
      }
    });
  }


  async findAllSearch(data): Promise<Academic[]> {
    return await this.academicRepository.find({
        where:
        data,
        relations: {
          subject: true,
          career: true,
          company: true
        }
      }
    );
  }

}
