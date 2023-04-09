import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app/app.module';
import {environment} from "@lib/system-design"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const globalPrefix = 'api';
  const version = 'v1'
  app.setGlobalPrefix(`${globalPrefix}/${version}`);
  const config = new DocumentBuilder()
    .setTitle('Al-Manshaah Project')
    .setDescription('Using swagger to manage all the endpoints')
    .setVersion('1.0')
    .addTag('Al-Manshaah')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const port = 8000;
  SwaggerModule.setup(`api/${version}`, app, document);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}/${version}`
  );
}

bootstrap();
