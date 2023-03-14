import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('events')
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  name: string;

  @Column()

  organizer : string;

  @Column()

  location: string

  @Column()

  information:string

  @Column()

  dateOfEvent: Date

  @CreateDateColumn()

  createdAt: Date

}
