import {
  Controller,
  Get,
  Post,
  Body,
  Req,
} from '@nestjs/common';
import {Request} from 'express';
import {VisitorsService} from './visitors.service';
import {CreateVisitorDto} from './dto/create-visitor.dto';
import {ApiTags} from "@nestjs/swagger";
import * as requestIp from 'request-ip';

@ApiTags("Visitor")
@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {
  }

  @Post()
  async create(@Body() createVisitorDto: CreateVisitorDto, @Req() req: Request) {
    const clientIp = requestIp.getClientIp(req);
    createVisitorDto.ip = clientIp;
    await this.visitorsService.create(createVisitorDto)
  }

  @Get()
  findAll(@Req() request: any) {
    return this.visitorsService.findAll();
  }

  
}
