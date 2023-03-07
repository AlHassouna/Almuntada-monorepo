export interface IPodcast {
  title: string;
  description: string;
  podcastUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IPodcastCreated = Omit<IPodcast, 'createdAt' | 'updatedAt'>;
