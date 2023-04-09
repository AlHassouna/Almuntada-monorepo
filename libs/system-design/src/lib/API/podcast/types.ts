export interface IPodcast {

  id: number;
  title: string;
  description: string;
  podcastUrl: string;

  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IPodcastCreated = Omit<IPodcast, 'createdAt' | 'updatedAt'>;

export type PodcastUpdated = Partial<IPodcast>
