import {Controller, Post, Body} from '@nestjs/common';
import {MailService} from './mailer.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Mailer')
@Controller('mail')
export class MailController {
  constructor(private readonly mailerService: MailService) {
  }

  @Post('send')
  async sendEmail(@Body() data) {
    const {email, subject, message} = data;
    return await this.mailerService.sendMail(email, subject, message);
  }

  @Post('send-confirmation-email')
  async sendConfirmationEmail(@Body() data) {
    const {email} = data;
    return await this.mailerService.sendConfirmationEmail(email);
  }
}

