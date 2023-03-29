import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import {User} from './user.entity';

@Entity('subject')

export class Subject {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  subject: string;

  @OneToMany(() => User, (user) => user.subject)
  user: User;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
