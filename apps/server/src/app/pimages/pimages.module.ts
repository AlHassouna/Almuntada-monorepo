import {Module} from '@nestjs/common';
import {PimagesService} from './pimages.service';
import {PimagesController} from './pimages.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "@lib/pgsql";
import {Pimage} from './entities/pimage.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Pimage]), DatabaseModule],
  controllers: [PimagesController],
  providers: [PimagesService]
})
export class PimagesModule {
}
