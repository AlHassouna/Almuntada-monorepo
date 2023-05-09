import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Headers
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
    console.log(req.socket.remoteAddress)
    createVisitorDto.ip = req.socket.remoteAddress;
    return this.visitorsService.create(createVisitorDto);
  }

  @Get()
  findAll(@Req() request: any) {
    return this.visitorsService.findAll();
  }
}
