import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';

@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}

  @Post()
  create(@Body() createVisitorDto: CreateVisitorDto) {
    return this.visitorsService.create(createVisitorDto);
  }

  @Get()
  findAll() {
    return this.visitorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorsService.findOne(+id)
  }

}
