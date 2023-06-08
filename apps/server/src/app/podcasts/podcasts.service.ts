import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreatePodcastDto} from './dto/create-podcast.dto';
import {Podcast} from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Podcast)
    private readonly podcastRepository: Repository<Podcast>
  ) {
  }

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

  async updatePodcast(id, data) {
    return await this.podcastRepository.update(id, data);
  }

  async getPodcastByIsActive(isActive: boolean) {
    return await this.podcastRepository.find({
      where: {
        isActive: isActive
      }
    });
  }

  async deleteAllPodcasts() {
    return await this.podcastRepository.delete({});
  }
}
