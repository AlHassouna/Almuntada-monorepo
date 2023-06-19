import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateVisitorDto} from './dto/create-visitor.dto';
import {Country} from './entities/country.entity';
import {Visitor} from "./entities/visitor.entity";

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(Visitor) private readonly visitorRepository: Repository<Visitor>,
    @InjectRepository(Country) private readonly countryRepository: Repository<Country>,
  ) {
  }

  async create(createVisitorDto: CreateVisitorDto) {
    const {location} = createVisitorDto;
    const countryName = location.at(-1)['long_name'];
    const countryCode = location.at(-1)['short_name'];
    const city = location.at(-3)['long_name'];
    const street = location.at(1)['long_name'];

    let country = await this.countryRepository.findOne({where: {countryCode}});

    if (!country) {
      country = this.countryRepository.create({
        country: countryName,
        countryCode,
        city,
        street,
        countryCount: 1,
      });

      await this.countryRepository.save(country);
    } else {
      country.countryCount += 1;
      await this.countryRepository.save(country);
    }
    const visitor = this.visitorRepository.create({
      ip: createVisitorDto.ip,
      userAgent: createVisitorDto.userAgent,
      languages: createVisitorDto.languages,
      country: country,
      pathname: createVisitorDto.pathname,
    });
    await this.visitorRepository.save(visitor);

    return visitor;
  }

  findAll() {
    return this.visitorRepository.find({
      relations: {
        country: true,
      }
    });
  }
}
