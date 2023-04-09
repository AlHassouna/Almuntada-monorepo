import {Module} from "@nestjs/common";
import {PodcastsController} from "./podcasts.controller";
import {PodcastsService} from "./podcasts.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Podcast} from "./entities/podcast.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Podcast])],
  controllers: [PodcastsController],
  providers: [PodcastsService]
})
export class PodcastsModule {
}
