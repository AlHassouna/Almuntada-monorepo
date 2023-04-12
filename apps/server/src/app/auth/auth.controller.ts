import { Body, Controller, Get, Post, Query  } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserInputDto } from "./dto/users.dto";
import { ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) {
  }

  @Post("register")
  signUp(@Body() user: UserInputDto) {
    return this.authService.signUp(user);
  }

  @Get()
   LogIn(@Query() data: LoginDto) {
    return this.authService.login(data);
  }
}

