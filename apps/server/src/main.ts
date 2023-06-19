import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import * as requestIp from 'request-ip';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(requestIp.mw());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const globalPrefix = 'api';
  const version = 'v1'

  app.setGlobalPrefix(`${globalPrefix}/${version}`);
  const port = 8000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}/${version}`
  );
}

bootstrap();
