import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('animals')
export class UserController {
  constructor(private readonly animalService: AnimalService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has not been created.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    this.animalService.create(createUserDto);
  }

  @Get()
  async getUsers() {
    const users = await this.animalService.findAll();
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
