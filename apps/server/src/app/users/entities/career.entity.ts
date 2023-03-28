import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import {User} from './user.entity';

@Entity('career')

export class Career {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  career: string;

  @OneToMany(() => User, (user) => user.career)
  user: User;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
