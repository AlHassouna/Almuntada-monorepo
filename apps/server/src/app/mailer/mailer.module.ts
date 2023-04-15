import { Module } from '@nestjs/common';
import { MailService } from './mailer.service';
import { MailController } from './mailer.controller';
import {MailerModule} from "@nestjs-modules/mailer";
import {mailerAsyncConfig} from "../config/mailer.config";
@Module({
  imports:[MailerModule.forRoot(mailerAsyncConfig)],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
