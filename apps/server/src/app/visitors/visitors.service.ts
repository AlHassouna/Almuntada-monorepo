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
    console.log(createVisitorDto)
    const {location} = createVisitorDto;
    const countryName = location.at(-1)['long_name'];
    const countryCode = location.at(-1)['short_name'];
    const area = location[0]['long_name'];

    let country = await this.countryRepository.findOne({where: {countryCode}});

    if (!country) {
      country = this.countryRepository.create({
        country: countryName,
        countryCode,
        area: [area],
        countryCount: 1,
      });

      await this.countryRepository.save(country);
    } else {
      country.area.push(area);
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
    console.log(visitor)
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

  async getCountriesCounter() {
    return this.countryRepository.count();
  }

  async getVisitorsCounter() {
    return this.visitorRepository.count();
  }
}
