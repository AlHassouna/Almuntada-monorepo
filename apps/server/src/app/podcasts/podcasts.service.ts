import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { Podcast } from './entities/podcast.entity';
@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Podcast)
    private readonly podcastRepository: Repository<Podcast>
  ) {}
  create(createPodcastDto: CreatePodcastDto) {
    const newPodcast = this.podcastRepository.create({
      ...createPodcastDto,
      createdAt: new Date(),
    });
    return this.podcastRepository.save(newPodcast);
  }
  findAll() {
    return this.podcastRepository.find();
  }
  findOne(id: number) {
    return `This action returns a #${id} podcast`;
  }
}
