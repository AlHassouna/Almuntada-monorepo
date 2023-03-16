import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {Subject} from "./entities/subject.entity";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import {OutputCreatedDataDtoData} from './dto/output-created-data.dto';
import {SearchTermDto} from './dto/search-term.dto';
import {SearchTermOutputDto} from './dto/search-term-output.dto';
import {SubjectDto} from "./dto/create-subject.dto";

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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(Number(id));
  // }

  @Get('subjects')
  async findAllSubjects(): Promise<Subject[]> {
    return await this.userService.findAllSubjects();
  }

  // @Post('/search')
  // async findUsersBySearchTerms(
  //   @Body() searchTerms: SearchTermDto
  // ): Promise<Array<SearchTermOutputDto>> {
  //   return this.userService.findUsersBySearchTerms(searchTerms);
  // }
}
