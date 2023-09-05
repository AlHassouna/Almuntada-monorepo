import {Module} from "@nestjs/common";
import {AcademicModule} from "./academic/academic.module";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {PodcastsModule} from "./podcasts/podcasts.module";
import {ContactModule} from "./contact/contact.module";
import {typeOrmAsyncConfig} from "./config/typeorm.config";
import {AuthModule} from "./auth/auth.module";
import {MailModule} from "./mailer/mailer.module";
import {VisitorsModule} from "./visitors/visitors.module";
import {EventsModule} from "./events/events.module";

@Module({
  imports: [
    AcademicModule,
    PodcastsModule,
    ContactModule,
    AuthModule,
    VisitorsModule,
    EventsModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    MailModule
  ],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
