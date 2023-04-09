import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('podcasts')
export class Podcast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  podcastUrl: string;

  @Column({default: false})

  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
