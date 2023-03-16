import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseModule} from '@myworkspace/pgsql';
import {User} from './entities/user.entity';
import {Subject} from './entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Subject]), DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
