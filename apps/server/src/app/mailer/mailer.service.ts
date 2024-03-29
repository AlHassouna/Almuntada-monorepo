import {Injectable} from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {
  }

  async sendMail(emails: string, subject: string, message: string) {
    await this.mailerService.sendMail({
      to: emails,
      from: process.env.USER_GMAIL,
      subject: subject,
      template: 'email',
      context: {
        message: message
      }
    })
  }

  async sendConfirmationEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      from: process.env.USER_GMAIL,
      subject: 'شكرا لانضمامك لقائمة الاكاديميين بجمعية المنتدى - البصمة الاكاديمية العربية!',
      template: 'confirmation-email',
    })
  }

  async sendSignupEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      from: process.env.USER_GMAIL,
      subject: 'شكر لطلب الانضمام لقائمة الاكاديميين بجمعية المنتدى - البصمة الاكاديمية العربية!',
      template: 'sign-up',
    })
  }
}
