import { Module } from "@nestjs/common";
import { AcademicModule } from "./academic/academic.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PodcastsModule } from "./podcasts/podcasts.module";
import { ContactModule } from "./contact/contact.module";
import { typeOrmAsyncConfig } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    AcademicModule,
    PodcastsModule,
    ContactModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
  ],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
