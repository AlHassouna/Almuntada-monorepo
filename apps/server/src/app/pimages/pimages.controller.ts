import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import {PimagesService} from './pimages.service';
import {CreatePimageDto} from './dto/create-pimage.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('PImages')
@Controller('pimages')
export class PimagesController {
  constructor(private readonly pimagesService: PimagesService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has not been created.',
  })
  create(@Body() createPimageDto: CreatePimageDto) {
    return this.pimagesService.create(createPimageDto);
  }

  @Get()
  findAll() {
    return this.pimagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pimagesService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pimagesService.remove(+id);
  }
}
