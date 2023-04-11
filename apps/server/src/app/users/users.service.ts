import { Injectable } from "@nestjs/common";
import { UserOutputDto } from "../auth/dto/users.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }

}
