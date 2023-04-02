import {Injectable} from '@nestjs/common';
import {CreatePimageDto} from './dto/create-pimage.dto';

@Injectable()
export class PimagesService {
  create(createPimageDto: CreatePimageDto) {
    return 'This action adds a new pimage';
  }

  findAll() {
    return `This action returns all pimages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pimage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pimage`;
  }
}
