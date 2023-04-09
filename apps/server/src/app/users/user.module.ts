import {Module} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Subject} from './entities/subject.entity';
import {Company} from "./entities/company.entity";
import {Career} from "./entities/career.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Subject, Company, Career])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
