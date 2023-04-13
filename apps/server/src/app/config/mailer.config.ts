import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import dotenv from 'dotenv';
dotenv.config();
 export const mailerAsyncConfig = {
     transport: {
       service: 'gmail',
       auth: {
         user: process.env.USER_GMAIL,
         pass: process.env.PASS_GMAIL,
       },
     },
     template: {
       dir: join(__dirname, 'app/mailer/templates'),
       adapter: new HandlebarsAdapter(),
       options: {
         strict: true
       }
     }
  }
