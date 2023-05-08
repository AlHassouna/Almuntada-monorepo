import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
} from '@nestjs/common';
import {Request} from 'express';
import {VisitorsService} from './visitors.service';
import {CreateVisitorDto} from './dto/create-visitor.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Visitor")
@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {
  }

  @Post()
  create(@Body() createVisitorDto: CreateVisitorDto, @Req() req: Request) {
    createVisitorDto.ip = req.ip;
    return this.visitorsService.create(createVisitorDto);
  }

  @Get()
  findAll(@Req() request: any) {
    return this.visitorsService.findAll();
  }
}
