import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('podcasts')
export class Podcast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  podcastUrl: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
