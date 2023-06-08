import {Module} from "@nestjs/common";
import {VisitorsService} from "./visitors.service";
import {VisitorsController} from "./visitors.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Visitor} from "./entities/visitor.entity";
import {Country} from "./entities/country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Visitor, Country])],
  controllers: [VisitorsController],
  providers: [VisitorsService]
})
export class VisitorsModule {
}
