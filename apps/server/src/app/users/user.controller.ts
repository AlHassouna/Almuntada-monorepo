import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe, Query,
} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {Subject} from "./entities/subject.entity";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import {Company} from "./entities/company.entity";
import {Career} from "./entities/career.entity";
import {SearchUserDto} from "./dto/search-user.dto";
import {User} from "./entities/user.entity";

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has not been created.',
  })
  create(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Get('subjects')
  async findAllSubjects(): Promise<Subject[]> {
    return await this.userService.findAllSubjects();
  }

  @Get('companies')
  async findAllCompanies(): Promise<Company[]> {
    return await this.userService.findAllCompanies();
  }

  @Get('careers')
  async findAllCareers(): Promise<Career[]> {
    return await this.userService.findAllCareers();
  }

  @Get('search')
  async findAllSearch(@Query() data: SearchUserDto): Promise<User[]> {
    return await this.userService.findAllSearch(data);
  }
}
