import {Injectable, UnauthorizedException} from "@nestjs/common";

import {JwtService} from "@nestjs/jwt";
import {LoginDto} from "./dto/auth.dto";
import {UserInputDto} from "./dto/users.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from "bcrypt";
import {User} from "../users/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersService: Repository<User>,
    private jwtService: JwtService
  ) {
  }

  createAccessToken(username: string, userId: number): { accessToken: string } {
    return {accessToken: this.jwtService.sign({username}, {expiresIn: 3600, secret: userId.toString()})};
  }

  async signUp(user: UserInputDto) {
    const {userName, firstName, lastName} = user;
    const getUser = await this.usersService.findOne({where: {userName}});
    if (getUser) {
      throw new UnauthorizedException(`User with username ${user.userName} already exists`);
    }
    const newUser = this.usersService.create({
      userName,
      password: await bcrypt.hash(user.password, 5),
      firstName,
      lastName
    });
    const {id} = await this.usersService.save(newUser);
    return {
      ...newUser,
      accessToken: this.createAccessToken(user.userName, id).accessToken
    };
  }

  async login(data: LoginDto) {
    const {userName, password} = data;
    const user = await this.usersService.findOne({where: {userName}});
    if (!user) throw new UnauthorizedException();

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new UnauthorizedException();

    return {
      ...user,
      accessToken: this.createAccessToken(user.userName, user.id).accessToken
    };
  }
}
