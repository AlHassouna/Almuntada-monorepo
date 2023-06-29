import {Module} from "@nestjs/common";
import {AcademicService} from "./academic.service";
import {AcademicController} from "./academic.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Academic} from "./entities/academic.entity";
import {Company} from "./entities/company.entity";
import {Career} from "./entities/career.entity";
import {AuthModule} from "../auth/auth.module";
import {Subject} from "./entities/subject.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Academic, Subject, Company, Career]), AuthModule],
  controllers: [AcademicController],
  providers: [AcademicService]
})
export class AcademicModule {
}
