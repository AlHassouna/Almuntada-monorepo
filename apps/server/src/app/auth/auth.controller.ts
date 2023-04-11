import { Body, Controller, Get, Header, Post, Query, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserInputDto } from "./dto/users.dto";
import { ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto/auth.dto";
import { Response as Res } from "express";
import { serialize } from "cookie";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("register")
  signUp(@Body() user: UserInputDto) {
    return this.authService.signUp(user);
  }

  @Get()
  @Header("Set-Cookie", serialize("auth", "Andy"))
  LogIn(@Query() data: LoginDto) {
    return this.authService.login(data);
  }
}
