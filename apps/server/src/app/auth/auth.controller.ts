import {Body, Controller, Post, Res} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {UserInputDto} from "./dto/users.dto";
import {ApiTags} from "@nestjs/swagger";
import {LoginDto} from "./dto/auth.dto";
import {Response} from "express";
import {JwtService} from "@nestjs/jwt";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) {
  }

  @Post("register")
  signUp(@Body() user: UserInputDto) {
    return this.authService.signUp(user);
  }

  @Post('login')
  LogIn(@Body() data: LoginDto, @Res({passthrough: true}) res: Response) {
    return this.authService.login(data, res);
  }
}
